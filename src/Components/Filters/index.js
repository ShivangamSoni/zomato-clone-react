import FilterItem from "../FilterItem";
import "./style.css";

const Filters = ({ filterList }) => {
  return (
    <div className="filters">
      <div className="filtersWrapper set-width">{filterList && filterList.map((filter) => <FilterItem key={filter.id} filter={filter} />)}</div>
    </div>
  );
};

export default Filters;
