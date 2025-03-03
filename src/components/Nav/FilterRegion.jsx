import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import SelectedCountry from "./SelectedCountry";

const FilterRegion = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const setIsActiveButtonHandler = () => {
    setIsActive((prevValue) => !prevValue);
  };

  const selectedCountryButtonHandler = (countryName) => {
    setSelectedCountry(countryName);
    setIsActive(false);
  };

  const resetButtonHandler = () => {
    setSelectedCountry("");
    setIsActive(false);
  };

  return (
    <div className="filter">
      <button onClick={setIsActiveButtonHandler}>
        <span>{selectedCountry ? selectedCountry : "Filter by Region"}</span>
        <span className={`filter-icon ${isActive ? "menu-active" : ""}`}>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </button>
      <SelectedCountry
        isActive={isActive}
        selectedCountry={selectedCountry}
        resetBtnHandler={resetButtonHandler}
        countryBtnHandler={selectedCountryButtonHandler}
      />
    </div>
  );
};

export default FilterRegion;
