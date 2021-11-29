import ImageCard from "..";
import style from "./style.module.css";

const BrandsCard = (props) => {
  return <ImageCard {...props} descVisible={false} passedStyle={style} />;
};

export default BrandsCard;
