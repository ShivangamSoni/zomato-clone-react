import "./style.css";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
  return (
    <div className="footerLinks">
      <h4 className="footerLinks-title">{title}</h4>
      {links.map((link) => (
        <Link key={link.label} className="footerLink" to={link.to}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
