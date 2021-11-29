import ProductCard from "../../Components/ImageCards/ProductCard";
import "./style.css";

const ProductListing = ({ title, products }) => {
  return (
    <div className="set-width">
      <h2 className="productListingTitle">{title}</h2>

      <div className="productListing">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
