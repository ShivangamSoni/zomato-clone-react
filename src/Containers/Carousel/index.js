import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../../Components/CarouselArrows/NextArrow";
import PrevArrow from "../../Components/CarouselArrows/PrevArrow";
import DeliveryCard from "../../Components/ImageCards/DeliveryCard";
import "./style.css";
import BrandsCard from "../../Components/ImageCards/BrandsCard";
import NavOptionCard from "../../Components/ImageCards/NavOptionCard";
import { Link } from "react-router-dom";

const Carousel = ({ title, items, slidesToShow, cardType, description }) => {
  const Card = getCard(cardType);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="set-width">
      <h2 className="carouselTitle">{title}</h2>
      {description && (
        <div className="carouselDesc">
          <p>{description.content}</p>
          <Link to={description.to}>{description.link}</Link>
        </div>
      )}

      <Slider {...settings}>
        {items.map((item) => (
          <Card key={item.id} onClick={item.onClick} data={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

const getCard = (type) => {
  switch (type) {
    case "brands":
      return BrandsCard;
    case "nav-option":
      return NavOptionCard;
    default:
      return DeliveryCard;
  }
};
