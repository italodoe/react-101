import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
      initialIsFollowing: true,
      userName: "berti",
      name: "Bartolomeu Jack",
    },
    {
      initialIsFollowing: true,
      userName: "rene",
      name: "Ronal Dupoint",
    },
    {
      initialIsFollowing: false,
      userName: "josep",
      name: "Josepino Orenn",
    },
    {
      initialIsFollowing: true,
      userName: "peter",
      name: "Petrov Andujar",
    },
  ];
  
export function App() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [name, setName] = useState("unknown");
  const format = (userName) => `@${userName}`;
  const jonDoe = {
    initialIsFollowing: false,
    userName: "jonDoe",
    formatUsername: format,
  };
  const handleClickBtn = () => {
    setName("doeJones");
  };


  return (
    <section className="app">
      <TwitterFollowCard
        userName="jonny00"
        initialIsFollowing
        formatUsername={format}
      >
        Jonny Mclera
      </TwitterFollowCard>
      <TwitterFollowCard
        userName="eli0"
        initialIsFollowing
        formatUsername={format}
      >
        Lenny Notte
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} formatUsername={format}>
        Jessy Kolrte
      </TwitterFollowCard>
      <TwitterFollowCard
        userName={name}
        initialIsFollowing={false}
        formatUsername={format}
      >
        Jane Park
      </TwitterFollowCard>
      <TwitterFollowCard {...jonDoe}>Jon Doe</TwitterFollowCard>

      <TwitterFollowCard
        userName="change"
        initialIsFollowing={isFollowing}
        formatUsername={format}
      >
        Change state
      </TwitterFollowCard>
      <button onClick={handleClickBtn}>Change Name</button>
      <button
        onClick={() => {
          setIsFollowing(!isFollowing);
        }}
      >
        Change app State
      </button>
        <hr></hr>
      {users.map(({ userName, name, initialIsFollowing }) => {
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={initialIsFollowing}
            formatUsername={format}
            key={userName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
