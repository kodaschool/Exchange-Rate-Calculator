import axios from "axios";
import { useState, useEffect } from "react";

const useCountrieshook = (url: string) => {
  const [countries, setCountries] = useState<any>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await axios(url);
        setCountries(response.data);
      } catch (error: any) {
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, [url]);
  return [countries, error, isLoading];
};

export default useCountrieshook;
