/* Hago el fetch para pedir los datos a la api y limpio los datos que nos vienen de la API (title, cuinse...)*/

const recipesApi = () => {
  return fetch("https://api.sampleapis.com/recipes/recipes")
    .then((response) => response.json())
    .then((data) => {
      const recipes = data.map((recipe) => {
        return {
          title: recipe.title,
          cuisine: recipe.cuisine,
          tags: recipe.tags,
          photo: recipe.photoUrl,
          calories: recipe.calories,
        };
      });
      return recipes;
    });
};
export default recipesApi;

/* Guardo los datos en el array llamado RECIPES ( const recipes). // data.map((recipe es el parametro que le paso al map para limpiar los datos))  */
