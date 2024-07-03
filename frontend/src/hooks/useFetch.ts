import { useState, useEffect } from "react";

type UseFetchState<T> = {
  loading: boolean;
  data: T | undefined;
  error: string | undefined;
};

export const useFetch = <T>(url: string): UseFetchState<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};
