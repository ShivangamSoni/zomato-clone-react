import "./style.css";
import SearchBar from "../../Components/SearchBar";
import MainNav from "../../Components/MainNav";

const HomeHeader = () => {
  return (
    <div className="homeHeader">
      <header className="header set-width">
        <a className="getApp" href="https://www.zomato.com/mobile" target="_blank" rel="noreferrer">
          Get the App
        </a>

        <MainNav />
      </header>

      <div className="imageWrapper">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
      </div>

      <div className="homeHeader-content">
        <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Zomato" />
        <h1 className="tagLine">Discover the best food &amp; drinks in Shimla</h1>

        <SearchBar />
      </div>
    </div>
  );
};

export default HomeHeader;
