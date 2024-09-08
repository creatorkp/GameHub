import { Text, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, errors, isloading } = useGenres();
  return (
    <ul>
      {genres.map((catog) => (
        <li>{catog.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
