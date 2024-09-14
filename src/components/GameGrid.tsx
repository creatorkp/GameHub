import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Prop {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Prop) => {
  const { data, errors, isloading } = useGames(gameQuery);
  const skeltonCard = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {errors && <Text>{errors}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isloading &&
          skeltonCard.map((sc) => (
            <GameCardSkeleton key={sc}></GameCardSkeleton>
          ))}
        {!isloading &&
          data.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
