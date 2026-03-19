import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  title: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Game[]>("/games")
      .then((res) => setGames(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {games.map((Game) => (
          <li key={Game.id}>{Game.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
