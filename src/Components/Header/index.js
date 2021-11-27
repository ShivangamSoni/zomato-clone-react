import "./style.css";
import { Link, useLocation } from "react-router-dom";
import MainNav from "../MainNav";
import SearchBar from "../SearchBar";
import Logo from "../Logo";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={`header set-width ${pathname === "/" ? "homeHeader" : ""} ${pathname === "/mobile" ? "getAppHeader" : ""}`}>
      {pathname !== "/" ? (
        <>
          <Logo center={pathname === "/mobile"} />
          {pathname !== "/mobile" ? <SearchBar /> : null}
        </>
      ) : (
        <Link className="getApp" to="/mobile">
          Get the App
        </Link>
      )}

      <MainNav />
    </header>
  );
};

export default Header;
