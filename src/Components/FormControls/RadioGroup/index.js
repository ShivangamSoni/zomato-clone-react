import "./style.css";

const RadioGroup = ({ items, name, selection, onClick }) => {
  return (
    <div className="radioGroup">
      {items.map((item) => (
        <label key={item.label}>
          <input type="radio" value={item.value} name={name} checked={selection === item.value} onClick={onClick} />
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
