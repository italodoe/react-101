import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <section className="app">
      <TwitterFollowCard
        userName="jonny00"
        name="Jon mighty"
        isFollowing
        formatUsername={format}
      />
      <TwitterFollowCard
        userName="eli0"
        name="Jenny Mcfubber"
        isFollowing
        formatUsername={format}
      />
      <TwitterFollowCard
        userName="light"
        name="Manuel Klein"
        isFollowing={false}
        formatUsername={format}
      />
      <TwitterFollowCard
        userName="dark"
        name="Luke Juss"
        isFollowing={false}
        formatUsername={format}
      />
    </section>
  );
}
