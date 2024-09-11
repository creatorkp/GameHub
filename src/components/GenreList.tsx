import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import CropImage from "./CropImage";
import { Platform } from "../hooks/useGames";

interface Prop {
  onClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onClick, selectedGenre }: Prop) => {
  const { data, errors, isloading } = useGenres();

  if (errors) return null;
  if (isloading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((catog) => (
          <ListItem key={catog.id} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={CropImage(catog.image_background)}
              ></Image>
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => onClick(catog)}
                fontWeight={selectedGenre?.id === catog.id ? "bold" : "normal"}
              >
                {catog.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
