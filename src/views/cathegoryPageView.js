import { insertFavorites } from "../pages/insertFavorites.js";

export function createCard(item, route) {
  const newCayegoryPage = document.querySelector(".category-container");

  const newDivCard = document.createElement("div");

  newDivCard.className = "card";

  if (route !== "stories") {
    const newImg = document.createElement("img");
    const url = item.thumbnail.path + ".jpg";
    newImg.src = url;
    newImg.alt = `${item.name} photo`;
    newDivCard.appendChild(newImg);
  }

  if ((route === "characters")||(route === "favorites")) {
    console.log("--25--");

    const newIcon = document.createElement("i");
    newIcon.className = "far fa-bookmark icon-fav";
    newIcon.title = "Add to Favorites";
    newIcon.addEventListener("click", () => {
      const favorites = favHandler();
      insertFavorites(item.id, favorites);
    });
    const favorites = favHandler();
    favorites.forEach((favItem) => {
      if (favItem.id === item.id) {
        newIcon.className = "far fa-bookmark inFav";
        newIcon.removeEventListener("click", insertFavorites);
        // newIcon.addEventListener("click", removeFavorite);
        newIcon.title = "Remove";
      }
    });
    newDivCard.appendChild(newIcon);
    const nameP = document.createElement("p");
    const namePtext = document.createTextNode(`NAME: ${item.name}`);
    nameP.appendChild(namePtext);
    newDivCard.appendChild(nameP);
  } else {
    const titleP = document.createElement("p");
    const titlePtext = document.createTextNode(`TITLE: ${item.title}`);
    titleP.appendChild(titlePtext);
    newDivCard.appendChild(titleP);
  }
  newCayegoryPage.appendChild(newDivCard);
}

function favHandler() {
  let favorites = [];
  const favoriteslocal = localStorage.getItem("favorites");
  if (favorites) {
  return favorites = JSON.parse(favoriteslocal);
  }
}