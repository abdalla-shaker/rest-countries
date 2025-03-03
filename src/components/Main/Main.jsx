import { useContext } from "react";

import { FilterContext } from "../../store/FilterCtx.jsx";
import { SearchCtx } from "../../store/SearchCtx.jsx";

import useCountries from "../../hooks/useCountries";
import Article from "./Article";

import "./main.css";

let FILTERED_COUNTRIES;

const Main = ({ handleSetCountry }) => {
  const { isLoading, countries, errorMsg } = useCountries();

  const { filterRegion } = useContext(FilterContext);
  const { searchRegion } = useContext(SearchCtx);

  if (filterRegion) {
    FILTERED_COUNTRIES = countries.filter(
      (country) => country.region === filterRegion
    );
  } else if (searchRegion) {
    FILTERED_COUNTRIES = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(searchRegion.toLowerCase().trim())
    );
  } else {
    FILTERED_COUNTRIES = countries;
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
