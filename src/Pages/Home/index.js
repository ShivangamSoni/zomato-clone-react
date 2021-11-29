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

  const collections = [
    { id: 1, title: "Newly Opened", desc: "19 Places", image: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015804.jpg?output-format=webp" },
    { id: 2, title: "Trending This Week", desc: "30 Places", image: "https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735044.png?output-format=webp" },
    { id: 3, title: "Best of Delhi NCR", desc: "160 Places", image: "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp" },
    { id: 4, title: "Great Cafes", desc: "32 Places", image: "https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg?output-format=webp" },
  ];

  const description = {
    content: "Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends",
    link: "All collection in Delhi NCR",
    to: "/collections",
  };

  return (
    <div>
      <HomeHeader />
      <div className="home-carouselContainer">
        <Carousel title="" slidesToShow={4} items={items} cardType="nav-option" />
      </div>

      <div className="home-carouselContainer">
        <Carousel title="Collections" items={collections} slidesToShow={4} cardType="collection" description={description} />
      </div>

      <GetApp />
    </div>
  );
};

export default Home;
