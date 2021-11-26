import "./style.css";
import { useLocation, Link } from "react-router-dom";
import MainNav from "../MainNav";
import SearchBar from "../SearchBar";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header set-width">
      <Link to="/" className="logo">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato" />
      </Link>

      {pathname !== "/" ? <SearchBar /> : null}

      <MainNav />
    </header>
  );
};

export default Header;
