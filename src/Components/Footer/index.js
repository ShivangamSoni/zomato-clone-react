import AppLinks from "../AppLinks";
import FooterLinks from "../FooterLinks";
import SocialLinks from "../SocialLinks";
import "./style.css";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Who We Are", to: "/who-we-are" },
      { label: "Blog", to: "/blog" },
      { label: "Careers", to: "/careers" },
      { label: "Report Fraud", to: "/report-fraud" },
      { label: "Contact", to: "/contact" },
      { label: "Investor", to: "/investor" },
      { label: "Relations", to: "/relations" },
    ],
  },
  {
    title: "For Foodies",
    links: [
      { label: "Code of Conduct", to: "/code-of-conduct" },
      { label: "Community", to: "/community" },
      { label: "Blogger Help", to: "/blogger-help" },
      { label: "Mobile Apps", to: "/mobile-apps" },
    ],
  },
  {
    multi: true,
    key: "multi",
    data: [
      {
        title: "For Restaurants",
        links: [{ label: "Add restaurants", to: "/add-restaurants" }],
      },
      {
        title: "For Enterprises",
        links: [{ label: "Zomato for Work", to: "/zomato-for-work" }],
      },
    ],
  },
  {
    title: "For You",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Security", to: "/security" },
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="set-width">
        <div className="footer-top">
          <div className="logo">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato" />
          </div>

          <div className="location-language">
            <div>Location</div>

            <div>Language</div>
          </div>
        </div>

        <div className="footer-body">
          {footerLinks.map((item) =>
            item.multi ? (
              <div key={item.key} className="links-container">
                {item.data.map((multiItem) => (
                  <FooterLinks key={multiItem.title} title={multiItem.title} links={multiItem.links} />
                ))}
              </div>
            ) : (
              <div key={item.title} className="links-container">
                <FooterLinks title={item.title} links={item.links} />
              </div>
            ),
          )}
          <div className="links-container">
            <SocialLinks />
            <AppLinks />
          </div>
        </div>

        <p className="footer-bottom">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective
          owners. 2008-2021 © Zomato™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
