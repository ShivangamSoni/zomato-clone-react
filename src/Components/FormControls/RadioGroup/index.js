import "./style.css";

const RadioGroup = ({ items, name, selection, onChange }) => {
  return (
    <div className="radioGroup">
      {items.map((item) => (
        <label key={item.label}>
          <input type="radio" value={item.value} name={name} checked={selection === item.value} onChange={onChange} />
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
