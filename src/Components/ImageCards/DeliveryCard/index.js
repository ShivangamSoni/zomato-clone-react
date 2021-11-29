import ImageCard from "..";
import style from "./style.module.css";

const DeliveryCard = (props) => {
  return <ImageCard {...props} descVisible={false} passedStyle={style} />;
};

export default DeliveryCard;
