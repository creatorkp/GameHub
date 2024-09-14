import { Card, HStack, Text, Image, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GamePlatformIcons from "./GamePlatformIcons";
import CriticScore from "./criticScore";
import CropImage from "./CropImage";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image objectFit="cover" src={CropImage(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <GamePlatformIcons
            platforms={game.parent_platforms.map((plat) => plat.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading marginY={3} fontSize={"2xl"}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
