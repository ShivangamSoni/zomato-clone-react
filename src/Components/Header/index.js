import "./style.css";
import { useLocation } from "react-router-dom";
import MainNav from "../MainNav";
import SearchBar from "../SearchBar";
import Logo from "../Logo";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header set-width">
      {pathname !== "/" ? (
        <>
          <Logo />
          <SearchBar />
        </>
      ) : (
        <a className="getApp" href="https://www.zomato.com/mobile" target="_blank" rel="noreferrer">
          Get the App
        </a>
      )}

      <MainNav />
    </header>
  );
};

export default Header;
