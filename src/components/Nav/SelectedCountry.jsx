import { useContext } from "react";

import { FilterContext } from "../../store/FilterCtx.jsx";

const SelectedCountry = ({
  selectedCountry,
  resetBtnHandler,
  countryBtnHandler,
  isActive,
}) => {
  const { filterRegionHandler, resetFilterHandler } = useContext(FilterContext);

  return (
    <ul className={`regions-menu ${isActive ? "menu-active" : ""}`}>
      {selectedCountry && (
        <li>
          <button
            onClick={() => {
              resetFilterHandler();
              resetBtnHandler();
            }}
          >
            Reset
          </button>
        </li>
      )}
      <li>
        <button
          onClick={() => {
            filterRegionHandler("Africa");
            countryBtnHandler("Africa");
          }}
        >
          Africa
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            filterRegionHandler("Americas");
            countryBtnHandler("America");
          }}
        >
          America
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            filterRegionHandler("Asia");
            countryBtnHandler("Asia");
          }}
        >
          Asia
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            filterRegionHandler("Europe");
            countryBtnHandler("Europe");
          }}
        >
          Europe
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            filterRegionHandler("Oceania");
            countryBtnHandler("Oceania");
          }}
        >
          Oceania
        </button>
      </li>
    </ul>
  );
};

export default SelectedCountry;
