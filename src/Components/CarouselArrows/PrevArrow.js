const PrevArrow = ({ className, style, onClick }) => {
  const customStyle = {
    ...style,
    backgroundColor: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px",
  };

  return <div className={className} style={customStyle} onClick={onClick}></div>;
};

export default PrevArrow;
