import { getCategoryData } from "./pages/cathegoryPage.js";

export const categoryRoute = async (route) => {
  console.log(`${route} 5--clicked`)
  const main = document.querySelector(".main-page");
  main.style.display = "none";
  const oldCayegoryPage = document.getElementById("category-container");
  if (oldCayegoryPage) {
    oldCayegoryPage.remove()
 
  }

  const newCayegoryPage = document.createElement("section");
  newCayegoryPage.id = "category-container";
  newCayegoryPage.className = "category-container";
  document.body.appendChild(newCayegoryPage); 


  getCategoryData(route);
};
