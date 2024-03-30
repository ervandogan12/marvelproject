export function createCard(item, route) {
  const newCayegoryPage = document.querySelector(".category-container");

  const newDivCard = document.createElement("div");

  newDivCard.className = "card";

 
  if (route !=="stories") {
    const newImg = document.createElement("img"); 
    const url = item.thumbnail.path + ".jpg";
    newImg.src = url;
    newImg.alt = `${item.name} photo`;
    newDivCard.appendChild(newImg);
  }

  if (route === "characters") {
    const nameP = document.createElement("p");
    const namePtext = document.createTextNode(`NAME: ${item.name}`);
    nameP.appendChild(namePtext);
    newDivCard.appendChild(nameP);
  }
  else{
    const titleP = document.createElement("p");
    const titlePtext = document.createTextNode(`TITLE: ${item.title}`);
    titleP.appendChild(titlePtext);
    newDivCard.appendChild(titleP);
  }
  newCayegoryPage.appendChild(newDivCard);
}
