import { useContext } from "react";

import { FilterContext } from "../../store/FilterCtx.jsx";
import { SearchCtx } from "../../store/SearchCtx.jsx";

import useCountries from "../../hooks/useCountries";
import Article from "./Article";

import "./main.css";

const Main = ({ handleSetCountry }) => {
  const { isLoading, countries, errorMsg } = useCountries();

  const { filterRegion } = useContext(FilterContext);
  const { searchRegion } = useContext(SearchCtx);

  let FILTERED_COUNTRIES = countries;

  if (filterRegion) {
    FILTERED_COUNTRIES = FILTERED_COUNTRIES.filter(
      (country) => country.region === filterRegion
    );
  }

  if (searchRegion) {
    FILTERED_COUNTRIES = FILTERED_COUNTRIES.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(searchRegion.toLowerCase().trim())
    );
  }

  return (
    <section className="main">
      {isLoading && (
        <h2 className="loading-message">
          Please wait fetching for countries...
        </h2>
      )}
      {errorMsg && <h2 className="error-message">{errorMsg}</h2>}
      <div className="articles-container">
        {FILTERED_COUNTRIES.map((country) => (
          <Article
            key={country.name.common}
            countryName={country.name.common}
            image={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
            clickHandler={handleSetCountry}
            country={country}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
