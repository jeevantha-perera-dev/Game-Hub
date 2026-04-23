// const GameGrid = () => {

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul>
//         {games.map((Game) => (
//           <li key={Game.id}>{Game.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GameGrid;

import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((Game) => (
          <li key={Game.id}>{Game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
