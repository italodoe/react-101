
export function TwitterFollowCard({formatUsername, userName, name, isFollowing}) {
 
    return (
      <article className='tw-followCard' /*style={{ display: "flex", color: "white", alignItems: "center" }}*/>
        <header className='tw-followCard-header '>
          <img
          className='tw-followCard-avatar'
            alt="avatar"
            src={`https://unavatar.io/${userName}`}
          />
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span>{formatUsername(userName)}</span>
          </div>
        </header>
        <aside>
          <button className='tw-followCard-btn' >
            Follow
            </button>
        </aside>
      </article>
    );
  }
  