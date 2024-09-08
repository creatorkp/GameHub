import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [errors, setErrors] = useState(" ");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) =>
        err instanceof CanceledError
          ? console.log("cancelled", err)
          : (console.log("error", err), setErrors(err.response.data))
      );

    return () => controller.abort();
  }, []);

  return { games, errors };
};

export default useGames;
