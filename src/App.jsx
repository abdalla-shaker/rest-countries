import FilterContextProvider from "./store/FilterCtx.jsx";
import SearchContextProvider from "./store/SearchCtx.jsx";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Nav from "./components/Nav/Nav.jsx";
import ResultModal from "./components/Modal/Modal.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
  const dialog = useRef();
  const [country, setCountry] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (Object.keys(country).length > 0) {
      dialog.current?.open();
    }
  }, [country]);

  const handleSetCountry = (region) => {
    setCountry(region);
  };

  const handleClose = () => {
    setCountry({});
  };

  const darkModeToggler = () => {
    setIsDarkMode((prevValue) => !prevValue);
  };

  return (
    <FilterContextProvider>
      <SearchContextProvider>
        <main className={`${isDarkMode ? "dark-mode" : ""}`}>
          {Object.keys(country).length > 0 && (
            <ResultModal ref={dialog} region={country} onClose={handleClose} />
          )}
          <Header darkModeToggler={darkModeToggler} isDarkMode={isDarkMode} />
          <Nav />
          <Main handleSetCountry={handleSetCountry} />
        </main>
      </SearchContextProvider>
    </FilterContextProvider>
  );
}

export default App;
