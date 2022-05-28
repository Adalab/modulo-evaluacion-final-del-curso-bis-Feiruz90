import { Link } from "react-router-dom";

const ItemRecipe = (props) => {
  return (
    <Link to={`/recipe/${props.recipe.id}`}>
      <div>
        <img alt={props.recipe.title} src={props.recipe.photo} width='150px' />
        <h4>{props.recipe.title}</h4>
        <p>{props.recipe.cuisine}</p>
        <p>{props.recipe.tags}</p>
        <p>{props.recipe.calories}</p>
      </div>
    </Link>
  );
};

export default ItemRecipe;
