import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import CanceledError from "axios";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);

  const [errors, setErrors] = useState(null);

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchDataResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => (setData(res.data.results), setIsLoading(false)))
      .catch((err) =>
        err.message != "canceled"
          ? (setErrors(err.message), setIsLoading(false), console.log(err))
          : null
      );

    return () => controller.abort();
  }, []);

  return { data, errors, isloading };
};

export default useData;
