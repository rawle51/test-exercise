import { useState } from 'react';

interface Params<T> {
  url: string;
  method: 'GET' | 'POST' | 'DELETE';
  data?: T;
}

export const useFetch = <T, U>({ url, method, data }: Params<T>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<U | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log(1, url);
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error);
      }

      setResponseData(result);
    } catch (error) {
      setError((error as { message: string }).message);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading, error, responseData };
};
