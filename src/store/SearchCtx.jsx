import { createContext, useState } from "react";

export const SearchCtx = createContext({
  searchRegionHandler: () => {},
  searchRegion: "",
});

const SearchContextProvider = ({ children }) => {
  const [searchRegion, setSearchRegion] = useState("");

  const searchRegionHandler = (region) => {
    setSearchRegion(region);
  };

  const ctxValue = {
    searchRegionHandler,
    searchRegion,
  };

  return <SearchCtx.Provider value={ctxValue}>{children}</SearchCtx.Provider>;
};

export default SearchContextProvider;
