import ImageCard from "..";
import style from "./style.module.css";

const NavOptionCard = (props) => {
  return <ImageCard {...props} descVisible={false} passedStyle={style} />;
};

export default NavOptionCard;
