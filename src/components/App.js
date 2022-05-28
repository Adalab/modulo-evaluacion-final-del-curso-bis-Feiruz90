import { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";
import recipesApi from "../services/recipesApi";
import ListRecipe from "./ListRecipe";
import Filter from "./Filter";
import DetailRecipe from "./DetailRecipe";
import styles from "../styles/App.scss";
import localStorage from "../services/localStorage";

/*useState es una función que retorna un array con dos datos. El primero se va a guardar en la primera constante, es decir, en dataRecipes. El segundo valor del array devuelto por useState se va a guardar en la segunda constante declarada, es decir, en seTdataRecipes. De esta forma guardo los datos en un array. */
function App() {
  const [dataRecipes, setDataRecipes] = useState(
    localStorage.get("recipes", [])
  );
  const [filterCuisine, setFilterCuisine] = useState(""); // ESTE PARETESIS ES UN STRING VACIO , NO HAY INFORMACION AL PRINCIPIO
  console.log(filterCuisine);
  /* con el useEffect (está importando en la linea 1) :Cada vez que se arranca la página hay que obtener las recetas llamando a esta API:*/
  useEffect(() => {
    recipesApi().then((data) => {
      console.log(data);
      setDataRecipes(
        data
      ); /* introduzco dentro de la variable de estado  datarecipes la informacion que le he pedido  a la API*/
    });
  }, []);
  /* despues del useeffect he creado el componenente ListRecipe*/
  // esta funcion de handlefiltercusine sirve para llamar a la funcion q actualiza la variable de estado ( FILTERCUISINE)
  useEffect(() => {
    localStorage.set("recipes", dataRecipes);
  }, [dataRecipes]);
  const handleFilterCuisine = (value) => {
    setFilterCuisine(value);
  };

  const filteredRecipes = dataRecipes.filter((recipe) => {
    return recipe.cuisine.toLowerCase().includes(filterCuisine.toLowerCase());
  });

  //estas dos lineas son para las rutas dinamicas

  const { pathname } = useLocation();
  const dataPath = matchPath("/recipe/:recipeId", pathname);

  const recipeId = dataPath !== null ? dataPath.params.recipeId : null;
  const recipeFound = dataRecipes.find(
    (oneRecipe) => oneRecipe.id === parseInt(recipeId)
  );

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Filter
                handleFilterCuisine={handleFilterCuisine}
                filterCuisine={filterCuisine}
              />
              <ListRecipe recipes={filteredRecipes} />;
            </>
          }
        />

        <Route
          path='/recipe/:recipeId'
          element={<DetailRecipe recipe={recipeFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
