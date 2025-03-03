import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import "./header.css";

const Header = ({ darkModeToggler, isDarkMode }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header--title">Where in the world?</h1>

        <button className="header--btn" onClick={darkModeToggler}>
          {isDarkMode && (
            <>
              <FontAwesomeIcon icon={faSun} className="moon-icon" />
              <span>Light Mode</span>
            </>
          )}
          {!isDarkMode && (
            <>
              <FontAwesomeIcon icon={regularMoon} className="moon-icon" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
