import "./style.css";
import { Link } from "react-router-dom";

const Logo = ({ center }) => {
  return (
    <Link to="/" className={`logo ${center ? "center" : ""}`}>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato" />
    </Link>
  );
};

export default Logo;
