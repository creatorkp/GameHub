import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((catog) => (
        <li key={catog.id}>{catog.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
