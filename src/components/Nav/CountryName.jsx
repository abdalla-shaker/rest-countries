import { useContext } from "react";
import { SearchCtx } from "../../store/SearchCtx.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CountryName = () => {
  const { searchRegionHandler } = useContext(SearchCtx);

  const onChangeHandler = (e) => {
    searchRegionHandler(e.target.value);
  };

  return (
    <div className="input-cont">
      <label htmlFor="country-name">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="magnifying-glass-icon"
        />
      </label>
      <input
        type="text"
        name="country-name"
        id="country-name"
        placeholder="Search for a country..."
        className="input-field"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default CountryName;
