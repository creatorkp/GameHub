import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
