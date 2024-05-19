import { useState } from "react";

export function TwitterFollowCard({
  children,
  formatUsername,
  userName = "unknown",
  initialIsFollowing
}) {
  //const state = useState(false);
  // const isFollowing = state[0],  setIsFollowing = state[1]
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const followText = isFollowing ? "Following" : "Follow";
  const followBtnClassName = isFollowing
    ? "tw-followCard-btn is-following"
    : "tw-followCard-btn";

  const handleClickBtn = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article
      className="tw-followCard"
      /*style={{ display: "flex", color: "white", alignItems: "center" }}*/
    >
      <header className="tw-followCard-header ">
        <img
          className="tw-followCard-avatar"
          alt="avatar"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={followBtnClassName} onClick={handleClickBtn}>
        <span className="tw-followCard-btn-text">{followText}</span>
          <span className="tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
}
