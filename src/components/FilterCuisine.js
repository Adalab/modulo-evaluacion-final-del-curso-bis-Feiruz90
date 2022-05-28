const FilterCuisine = (props) => {
  const handleInput = (event) => {
    props.handleFilterCuisine(event.target.value);
  };

  return (
    <input
      type='text'
      name='recipe'
      id='recipe'
      placeholder='Tipo de cocina'
      value={props.filterCuisine}
      onChange={handleInput}
    />
  );
};

export default FilterCuisine;
