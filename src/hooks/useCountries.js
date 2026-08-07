import { useEffect, useState } from "react";

const useCountries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://api.restcountries.com/countries/v5',
          { headers: { 'Authorization': 'Bearer rc_live_548071cc9004404db0d3b080aba8ea6e' } }
        );
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
