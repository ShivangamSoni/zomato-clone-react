import "./style.css";
import { Link } from "react-router-dom";

const ExploreList = ({ title, links }) => {
  return (
    <>
      <h3 className="explore-subheading">{title}</h3>
      <div>
        {links.map((link) => (
          <Link className={`explore-list-links ${link.class}`} key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ExploreList;
