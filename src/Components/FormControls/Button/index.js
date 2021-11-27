import "./style.css";

const Button = ({ type, children }) => {
  return (
    <button className="btn" type={type}>
      {children}
    </button>
  );
};

export default Button;
