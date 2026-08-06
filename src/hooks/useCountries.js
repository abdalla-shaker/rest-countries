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
          'https://api.restcountries.com/countries/v5/codes.alpha_2/ca?pretty=1',
          { headers: { 'Authorization': 'Bearer rc_live_demo' } }
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
