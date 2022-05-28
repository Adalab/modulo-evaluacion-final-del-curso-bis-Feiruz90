import ItemRecipe from "./ItemRecipe";
import "../styles/components/ListRecipe.scss";

function ListRecipe(props) {
  const recipElements = props.recipes.map((recipe) => {
    return (
      <li key={recipe.id}>
        <ItemRecipe recipe={recipe} />
      </li>
    );
  });
  return (
    <div>
      <ul className='list'>{recipElements}</ul>
    </div>
  );
}
export default ListRecipe;
