import "./style.css";
import { Link } from "react-router-dom";

const PopularList = ({ title, links }) => {
  return (
    <>
      <h3 className="explore-subheading">Popular {title} near me</h3>
      <div>
        {links.map((link) => (
          <Link className="popular-links" key={link.label} to={link.to}>
            {link.label} near me
          </Link>
        ))}
      </div>
    </>
  );
};

export default PopularList;
