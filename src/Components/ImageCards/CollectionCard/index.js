import ImageCard from "..";
import style from "./style.module.css";

const CollectionCard = (props) => {
  return <ImageCard {...props} passedStyle={style} />;
};

export default CollectionCard;
