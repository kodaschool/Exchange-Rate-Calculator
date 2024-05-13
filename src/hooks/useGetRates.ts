import axios from "axios";
import { useState, useEffect } from "react";

const useRateshook = (url: string) => {
  const [rates, setRates] = useState<any>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchRates = async () => {
      setIsLoading(true);
      try {
        const response = await axios(url);
        setRates(response.data.rates);
      } catch (error: any) {
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRates();
  }, []);
  return [rates, error, isLoading];
};

export default useRateshook;
