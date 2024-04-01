import { searchHandler } from "../src/pages/searchPage.js";
import { createInputElement, createLogoElement, createMenuElement, createTexElement, createVideoElement } from "../src/views/homePageView.js";

// getApi("characters");

export const homePage = () => {
  const menuElement = createMenuElement();
  const inpuElement= createInputElement();
  const logo = createLogoElement();
  const menuDiv = document.createElement("div");

  const mainContainer = document.createElement("div");
  mainContainer.className= "main-page"
  const videoElement = createVideoElement()
  const infoMarvel = createTexElement()
  mainContainer.appendChild(videoElement)
  mainContainer.appendChild(infoMarvel)

  menuDiv.className = "header";
  menuDiv.appendChild(logo);
  menuDiv.appendChild(menuElement);
  menuDiv.appendChild(inpuElement);

 

  document.body.appendChild(menuDiv);
  document.body.appendChild(mainContainer);

  searchHandler()
};




window.addEventListener("load", homePage);
