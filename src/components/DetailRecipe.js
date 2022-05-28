import { Link } from "react-router-dom";
import "../styles/components/DetailRecipe.scss";
const DetailRecipe = (props) => {
  return (
    <div className='detail'>
      <img
        className='image'
        src={props.recipe.photo}
        alt={props.recipe.title}
      />
      <h4>{props.recipe.title}</h4>
      <p>{props.recipe.cuisine}</p>
      <p>{props.recipe.calories}</p>
      <Link to={"/"}>
        <button type='button'>Volver</button>
      </Link>
    </div>
  );
};
export default DetailRecipe;
