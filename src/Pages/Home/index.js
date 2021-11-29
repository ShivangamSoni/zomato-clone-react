import "./style.css";
import HomeHeader from "../../Containers/HomeHeader";
import GetApp from "../../Containers/GetApp";
import Carousel from "../../Containers/Carousel";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      title: "Order Food Online",
      image: "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
      onClick: () => navigate("/order"),
    },
    {
      id: 2,
      title: "Go out for a meal",
      image: "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
      onClick: () => navigate("/order"),
    },
    {
      id: 3,
      title: "Zomato Pro",
      image: "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
      onClick: () => navigate("/order"),
    },
    {
      id: 4,
      title: "Nightlife & Clubs",
      image: "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
      onClick: () => navigate("/order"),
    },
  ];

  return (
    <div>
      <HomeHeader />
      <div className="carouselContainer">
        <Carousel title="" slidesToShow={4} items={items} cardType="nav-option" />
      </div>
      <GetApp />
    </div>
  );
};

export default Home;
