export function createCharCard(characterItem) {
    const newDivCard = document.createElement("div");
    const newDivInner = document.createElement("div");
    const newDivFront = document.createElement("div");
    const newDivBack = document.createElement("div");
    newDivCard.className = "card";
    newDivInner.className = "card-inner";
    newDivFront.className = "card-front";
    newDivBack.className = "card-back";
    const newImg = document.createElement("img");
    newImg.src = characterItem.imageUrl;
    newImg.alt = `${arrayItem.image} photo`;
    newDivFront.appendChild(newImg);
    newDivInner.appendChild(newDivFront);
    newDivInner.appendChild(newDivBack);
    newDivCard.appendChild(newDivInner);
    const nameP = document.createElement("p");
    const namePtext = document.createTextNode(`NAME: ${arrayItem.fullName}`);
    nameP.appendChild(namePtext);
    newDivBack.appendChild(nameP);
    const titleP = document.createElement("p");
    const titlePtext = document.createTextNode(`TITLE: ${arrayItem.title}`);
    titleP.appendChild(titlePtext);
    newDivBack.appendChild(titleP);
    const familyP = document.createElement("p");
    const familyPtext = document.createTextNode(`FAMILY: ${arrayItem.family}`);
    familyP.appendChild(familyPtext);
    newDivBack.appendChild(familyP);
    // newDivCard.setAttribute("data-id", arrayItem.id);
    return newDivCard;

}
