import { Link } from "react-router-dom";

const DetailRecipe = (props) => {
  return (
    <div>
      <img src={props.recipe.photo} alt={props.recipe.title} />
      <h4>{props.recipe.title}</h4>
      <Link to={"/"}>
        <button type='button'>Volver</button>
      </Link>
    </div>
  );
};
export default DetailRecipe;
