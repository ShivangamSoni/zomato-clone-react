import "./style.css";
import Filters from "../../Components/Filters";
import Carousel from "../Carousel";
import ProductListing from "../ProductListing";
import { useSelector } from "react-redux";

const OrderSection = ({ activeSection }) => {
  const { deliveryFilters, deliveryBrands, deliveryCarousel, deliveryProducts } = useSelector((state) => {
    const delivery = state.deliveryState;

    return {
      deliveryFilter: delivery.filters,
      deliveryBrands: delivery.brands,
      deliveryCarousel: delivery.carousel,
      deliveryProducts: delivery.products,
    };
  });

  const { diningCollection, diningRestaurants, diningFilters } = useSelector((state) => {
    const dining = state.diningState;

    return { diningCollection: dining.collection, diningRestaurants: dining.restaurants, diningFilters: dining.filters };
  });

  const { nightlifeCollection, nightlifeRestaurants, nightlifeFilters } = useSelector((state) => {
    const nightlife = state.nightlifeState;

    return { nightlifeCollection: nightlife.collection, nightlifeRestaurants: nightlife.restaurants, nightlifeFilters: nightlife.filters };
  });

  const description = {
    content: "Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends",
    link: "All collection in Delhi NCR",
    to: "/collections",
  };

  switch (activeSection) {
    case "Delivery": {
      return (
        <div>
          <Filters filterList={deliveryFilters} />

          <div className="carouselContainer">
            <Carousel title="Eat what makes you happy" items={deliveryCarousel} slidesToShow={4} card="delivery" />
          </div>

          <Carousel title="Top brands for you" items={deliveryBrands} slidesToShow={6} cardType="brands" />

          <ProductListing title={"Delivery Restaurants in Delhi NCR"} products={deliveryProducts} />
        </div>
      );
    }
    case "Dining Out": {
      return (
        <div>
          <div className="carouselContainer">
            <Carousel title="Collections" items={diningCollection} slidesToShow={4} cardType="collection" description={description} />
          </div>

          <Filters filterList={diningFilters} />

          <ProductListing title={"Dine-Out Restaurants in Delhi NCR"} products={diningRestaurants} />
        </div>
      );
    }
    case "Nightlife": {
      return (
        <div>
          <div className="carouselContainer">
            <Carousel title="Collections" items={nightlifeCollection} slidesToShow={4} cardType="collection" description={description} />
          </div>

          <Filters filterList={nightlifeFilters} />

          <ProductListing title="Nightlife Restaurants in Delhi NCR" products={nightlifeRestaurants} />
        </div>
      );
    }
    default:
      return null;
  }
};

export default OrderSection;
