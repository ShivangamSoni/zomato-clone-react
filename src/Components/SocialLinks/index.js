import "./style.css";

const SocialLinks = () => {
  return (
    <div className="socialLinks">
      <h4 className="footerLinks-title">Social Links</h4>
      <div className="socialLinks-container">
        <a className="social-icon" href="https://www.facebook.com/zomato" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="social-icon" href="https://twitter.com/zomato" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="social-icon" href="https://www.instagram.com/zomato/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
