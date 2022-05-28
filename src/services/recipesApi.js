/* Hago el fetch para pedir los datos a la api y limpio los datos que nos vienen de la API (title, cuinse...)*/
/* Creo la CONST recipesApi para poder exportarla y usarla con el useEffect ( ubicada en App.js)*/

/*El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.*/

const recipesApi = () => {
  return fetch("https://api.sampleapis.com/recipes/recipes")
    .then((response) => response.json())
    .then((data) => {
      const recipesData = data.map((recipe) => {
        return {
          id: recipe.id,
          title: recipe.title,
          cuisine: recipe.cuisine,
          tags: recipe.tags,
          photo: recipe.photoUrl,
          calories: recipe.calories,
        };
      });
      return recipesData;
    });
};
export default recipesApi;
// data.map((recipe es el parametro que le paso al map para limpiar los datos))  //

/*
1. he pedido los datos a la API,  
2.He hecho MAP para limpiar los datos y me he quedado con los q necesito (id,, cuisine...).
3. He guardado los datos en el array  recipesData
4. y ME VOY A APP.JS PARA HACER UN useEffect (Ejecutar acciones de las que React no se encarga como por ejemplo, llamar a un fetch */

/*me retorna este objeto. Los arrays se utilizan para agrupar objetos del mismo tipo .*/
