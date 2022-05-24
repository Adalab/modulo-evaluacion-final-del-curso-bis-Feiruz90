import { useState, useEffect } from "react";
import recipesApi from "../services/recipesApi";

function App() {
  const [dataRecipes, setDataRecipes] = useState([]);

  useEffect(() => {
    recipesApi().then((recipes) => {});
  }, []);
  console.log(recipesApi());
  return <h1></h1>;
}

export default App;
