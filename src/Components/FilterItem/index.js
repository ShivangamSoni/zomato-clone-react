import "./style.css";

const FilterItem = ({ filter }) => {
  const { icon, label } = filter;

  return (
    <div className="filterItem">
      {icon && icon}
      {label}
    </div>
  );
};

export default FilterItem;
