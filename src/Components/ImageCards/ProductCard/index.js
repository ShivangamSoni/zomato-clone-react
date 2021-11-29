import ImageCard from "..";
import style from "./style.module.css";

const ProductCard = (props) => {
  return <ImageCard {...props} product={true} passedStyle={style} />;
};

export default ProductCard;
