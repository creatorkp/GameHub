import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropImage from "./CropImage";
import { error } from "console";

const GenreList = () => {
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
              <Text fontSize="lg">{catog.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
