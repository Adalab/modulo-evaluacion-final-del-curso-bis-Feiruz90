import FilterCuisine from "./FilterCuisine";

const Filter = (props) => {
  return (
    <form>
      <FilterCuisine
        handleFilterCuisine={props.handleFilterCuisine}
        filterCuisine={props.filterCuisine}
      />
    </form>
  );
};

export default Filter;
