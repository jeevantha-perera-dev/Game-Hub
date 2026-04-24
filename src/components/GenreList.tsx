import React from "react";
import useGames from "../hooks/useGames";

const GenreList = () => {
  const { games } = useGames();
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.genre}</li>
      ))}
    </ul>
  );
};

export default GenreList;
