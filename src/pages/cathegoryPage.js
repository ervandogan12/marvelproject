import { getData } from "../data.js";
import { createCard } from "../views/cathegoryPageView.js";


export const getCategoryData = async (route) => {

  if (route!=="favorites") {
    const categoryData = await getData(route);
    categoryData.data.results.map((arrayElement) => {
      console.log(arrayElement.id)
       createCard(arrayElement, route)
    });
  } else {
    const favorites = localStorage.getItem("favorites");
     let fav = JSON.parse(favorites);
     fav.map((arrayElement) => {
       createCard(arrayElement, route)
    });
  }

};
