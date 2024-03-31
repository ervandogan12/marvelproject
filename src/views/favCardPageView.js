export function createFavCard(item) {
  const newCayegoryPage = document.querySelector(".category-container");

  const newDivCard = document.createElement("div");
  newDivCard.className = "card";
  const newImg = document.createElement("img");
  const url = item.thumbnail.path + ".jpg";
  newImg.src = url;
  newImg.alt = `${item.name} photo`;
  newDivCard.appendChild(newImg);
  const nameP = document.createElement("p");
  const namePtext = document.createTextNode(`NAME: ${item.name}`);
  nameP.appendChild(namePtext);
  newDivCard.appendChild(nameP);

  newCayegoryPage.appendChild(newDivCard);
}
