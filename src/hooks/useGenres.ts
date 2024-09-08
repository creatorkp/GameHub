import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
export interface Genre {
  id: string;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const [errors, setErrors] = useState(" ");

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => (setGenres(res.data.results), setIsLoading(false)))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.response.data), setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, errors, isloading };
};

export default useGenre;
