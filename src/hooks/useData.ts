import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: Axios.AxiosXHRConfigBase<FetchDataResponse<T>>,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);

  const [errors, setErrors] = useState(null);

  const [isloading, setIsLoading] = useState(false);

  const controller = new AbortController();

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get<FetchDataResponse<T>>(endpoint, {
          ...requestConfig,
        })
        .then((res) => (setData(res.data.results), setIsLoading(false)))
        .catch((err) =>
          err.message != "canceled"
            ? (setErrors(err.message), setIsLoading(false), console.log(err))
            : null
        );

      return () => {
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, errors, isloading };
};

export default useData;
