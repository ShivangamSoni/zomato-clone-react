const ImageCard = ({ data, onClick, descVisible = true, product = false, passedStyle }) => {
  const style = passedStyle;

  return (
    <div className={style.card} onClick={onClick}>
      <div className={style.imageWrapper}>
        <img src={data.image} alt={data.title} />
      </div>

      <div className={style.cardContent}>
        <div>
          <h3 className={style.contentTitle}>{data.title}</h3>
          {product && (
            <span className={style.rating}>
              {data.rating} <i className="fas fa-star"></i>
            </span>
          )}
        </div>
        <div>
          {descVisible && <p className={style.contentDesc}>{data.desc}</p>}
          {product && <span className={style.price}>₹{data.price} for one</span>}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
