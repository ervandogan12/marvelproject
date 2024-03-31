import { createFavCard } from "../views/favCardPageView.js";

export const getFavoritesData = () => {
    let favorites = localStorage.getItem("favorites");
    if (favorites) {
     favorites = JSON.parse(favorites);
    }
    favorites.map((arrayElement) => {
       createFavCard(arrayElement)
    });
  };