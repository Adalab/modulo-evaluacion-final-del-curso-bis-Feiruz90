import "../styles/components/FilterCuisine.scss";

const FilterCuisine = (props) => {
  const handleInput = (event) => {
    props.handleFilterCuisine(event.target.value);
  };

  return (
    <div className='filter'>
      <h1>Recetas</h1>
      <p>Ideas para tus menús semanales</p>
      <input
        type='text'
        name='recipe'
        id='recipe'
        placeholder='Tipo de cocina'
        value={props.filterCuisine}
        onChange={handleInput}
      />
    </div>
  );
};

export default FilterCuisine;
