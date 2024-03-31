import { getData } from "../data.js";
import { getCategoryData } from "./cathegoryPage.js";
export const insertFavorites = async (id, favorites) => {

const categoryData = await getData("characters");

 categoryData.data.results.forEach((chrItem) => {
    if (chrItem.id === id) {
      if (favorites) {
        favorites.push(chrItem);
      } else {
        favorites = [chrItem];
      }
    }
  });

 localStorage.setItem("favorites", JSON.stringify(favorites));
 getCategoryData("characters");
};

export const removeFavorite = (id, favorites) => {

    favorites.forEach((item) => {

      if (favorites && item.id === id) {
        favorites = favorites.filter((item) => item.id !== id);
        if (favorites.length === 0) {
          delete localStorage.removeItem('favorites');;
        }
      }
    });
  localStorage.setItem("favorites", JSON.stringify(favorites));
   getCategoryData("characters");
};
