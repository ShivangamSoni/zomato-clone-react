import Filters from "../../Components/Filters";
import Carousel from "../Carousel";
import "./style.css";

const deliveryFilters = [
  { id: 1, label: "Filters", icon: <i className="fas fa-sliders-h"></i> },
  { id: 2, label: "Delivery Time", icon: <i className="fas fa-stopwatch"></i> },
  { id: 3, label: "Pure Veg" },
  { id: 4, label: "Rating 4.0+" },
  { id: 5, label: "Great Offers" },
  { id: 6, label: "Cuisines" },
];

const deliveryItems = [
  { id: 1, title: "Pizza", image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" },
  { id: 2, title: "Burger", image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" },
  { id: 3, title: "Rolls", image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" },
  { id: 4, title: "Thali", image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" },
  { id: 5, title: "Chaat", image: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png" },
  { id: 6, title: "Biryani", image: "https://b.zmtcdn.com/data/dish_images/2a24c5264606bd78622267d28a3726821634805216.png" },
  { id: 7, title: "Paneer", image: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png" },
  { id: 8, title: "Chicken", image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" },
  { id: 9, title: "Cake", image: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" },
  { id: 1, title: "Paratha", image: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png" },
  { id: 1, title: "Chole Bhature", image: "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png" },
  { id: 1, title: "Momos", image: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png" },
];

const topBrands = [
  { id: 1, title: "30 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp" },
  { id: 1, title: "31 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp" },
  { id: 1, title: "30 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp" },
  { id: 1, title: "37 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp" },
  { id: 1, title: "32 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp" },
  { id: 1, title: "31 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png?output-format=webp" },
  { id: 1, title: "37 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp" },
  { id: 1, title: "35 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp" },
  { id: 1, title: "31 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp" },
  { id: 1, title: "35 min", image: "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp" },
];

const OrderSection = ({ activeSection }) => {
  return (
    <div>
      <Filters filterList={deliveryFilters} />
      <div className="carouselContainer">
        <Carousel title="Eat what makes you happy" items={deliveryItems} slidesToShow={4} card="delivery" />
      </div>

      <Carousel title="Top brands for you" items={topBrands} slidesToShow={6} cardType="brands" />
    </div>
  );
};

export default OrderSection;
