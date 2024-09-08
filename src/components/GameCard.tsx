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
    <Card height="350px" width="300px" borderRadius={10} overflow="hidden">
      <Image src={CropImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <GamePlatformIcons
            platforms={game.parent_platforms.map((plat) => plat.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
