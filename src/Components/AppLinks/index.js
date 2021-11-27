import "./style.css";

const AppLinks = ({ row }) => {
  return (
    <div className={`appLinks ${row ? "row" : null}`}>
      <a href="https://apps.apple.com/in/app/zomato-food-restaurant-finder/id434613896" target="_blank" rel="noreferrer">
        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="Apple Store Zomato App Download Link" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.application.zomato" target="_blank" rel="noreferrer">
        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="Google Play Store Zomato App Download Link" />
      </a>
    </div>
  );
};

export default AppLinks;
