import { Link } from "react-router-dom";
import defaultImages from "../images/food.jpeg";

const ItemRecipe = (props) => {
  const food = props.recipe.photo === "" ? defaultImages : props.recipe.photo;
  return (
    <Link to={`/recipe/${props.recipe.id}`}>
      <div>
        <img alt={props.recipe.title} src={props.recipe.photo || food} />
        <h4>{props.recipe.title}</h4>
        <p>{props.recipe.cuisine}</p>
        <p>{props.recipe.tags}</p>
        <p>{props.recipe.calories}</p>
      </div>
    </Link>
  );
};

export default ItemRecipe;
