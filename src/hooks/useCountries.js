import { useEffect, useState } from "react";

const useCountries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries data");
        }
        const data = await response.json();
        setCountries(data);
        setIsLoading(false);
      } catch (err) {
        setErrorMsg(err.message);
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { isLoading, countries, errorMsg };
};

export default useCountries;
