// import style from "./style.module.css";

const ImageCard = ({ data, onClick, descVisible = true, passedStyle }) => {
  const style = passedStyle || require("./style.module.css");

  return (
    <div className={style.card} onClick={onClick}>
      <div className={style.imageWrapper}>
        <img src={data.image} alt="" />
      </div>

      <div className={style.cardContent}>
        <h3 className={style.contentTitle}>{data.title}</h3>
        {descVisible && <p className={style.contentDesc}>Desc</p>}
      </div>
    </div>
  );
};

export default ImageCard;
