import { insertFavorites, removeFavorite } from "../pages/insertFavorites.js";

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

  if (route === "characters") {
    const newIcon = document.createElement("i");
    newIcon.className = "far fa-bookmark icon-fav";
    newIcon.title = "Add to Favorites";

  const clickHandlerAddFav = () => {
    const favorites = favHandler();
    insertFavorites(item.id, favorites);
};

    newIcon.addEventListener("click", clickHandlerAddFav);
    const favorites = favHandler();
    if (favorites) {
      favorites.forEach((favItem) => {
        console.log("32--"+favItem.id)
        console.log("33--"+item.id)
        if (favItem.id === item.id) {
          newIcon.className = "far fa-bookmark inFav";
          console.log("35"+item.id)
          const clickHandlerRemoveFav = () => {
            const favorites = favHandler();
            removeFavorite(item.id, favorites);
          };

          newIcon.removeEventListener("click", clickHandlerAddFav);
          newIcon.addEventListener("click", clickHandlerRemoveFav);
          newIcon.title = "Remove";
        }
      });
    }
 
    newDivCard.appendChild(newIcon);
    const nameP = document.createElement("p");
    const namePtext = document.createTextNode(`NAME: ${item.name}`);
    nameP.appendChild(namePtext);
    newDivCard.appendChild(nameP);
  } else {
    const titleP = document.createElement("p");
    const titlePtext = document.createTextNode(`TITLE: ${item.title}`);
    console.log(item)
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