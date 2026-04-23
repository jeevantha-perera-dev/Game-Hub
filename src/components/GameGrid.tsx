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

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((Game) => (
          <GameCard key={Game.id} game={Game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
