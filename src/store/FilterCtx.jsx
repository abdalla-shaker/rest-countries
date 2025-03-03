import { createContext, useState } from "react";

export const FilterContext = createContext({
  filterRegionHandler: () => {},
  resetFilterHandler: () => {},
  filterRegion: "",
});

const FilterContextProvider = ({ children }) => {
  const [filterRegion, setFilterRegion] = useState("");

  const filterRegionHandler = (region) => {
    setFilterRegion(region);
  };

  const resetFilterHandler = () => {
    setFilterRegion("");
  };

  const ctxValue = {
    filterRegionHandler,
    resetFilterHandler,
    filterRegion,
  };

  return (
    <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
