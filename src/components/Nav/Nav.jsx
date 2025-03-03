import CountryName from "./CountryName";
import FilterRegion from "./FilterRegion";

import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <CountryName />
      <FilterRegion />
    </nav>
  );
};

export default Nav;
