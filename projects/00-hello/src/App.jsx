import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const [name, setName] = useState("unknown");
  const format = (userName) => `@${userName}`;
  const jonDoe = {
    isFollowing: false,
    userName: "jonDoe",
    formatUsername: format,
  };
  const handleClickBtn = () => {
    setName('doeJones')
  };
  return (
    <section className="app">
      <TwitterFollowCard userName="jonny00" isFollowing formatUsername={format}>
        Jonny Mclera
      </TwitterFollowCard>
      <TwitterFollowCard userName="eli0" isFollowing formatUsername={format}>
        Lenny Notte
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} formatUsername={format}>
        Jessy Kolrte
      </TwitterFollowCard>
      <TwitterFollowCard userName={name} isFollowing={false} formatUsername={format}>
        Jane Park
      </TwitterFollowCard>
      <TwitterFollowCard {...jonDoe}>Jon Doe</TwitterFollowCard>
      <button onClick={handleClickBtn}>Change Name</button>
    </section>
  );
}
