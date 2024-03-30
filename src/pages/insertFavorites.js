import { getData } from "../data.js";
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
};


