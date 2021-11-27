import "./style.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="searchBar-group">
        <i className="location-icon fas fa-map-marker-alt"></i>

        <select className="location-select">
          <option>Delhi</option>
          <option>Chandigarh</option>
          <option>Mumbai</option>
        </select>

        <i className="dropdown-arrow fas fa-sort-down"></i>
      </div>

      <div className="searchBar-group">
        <i className="search-icon fas fa-search"></i>
        <input className="search-input" type="search" placeholder="Search for restaurant, cuisine or a dish" />
      </div>
    </div>
  );
};

export default SearchBar;
