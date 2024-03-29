import { getCategoryData } from "./pages/charactersPage.js";

export const categoryRoute = (route) => {

    // sliderWrap.className = "category-container-hidden";
     const categorySection = document.querySelector(".main-page");
     categorySection.style.display="none"
    // if (categorySection) {
    //   categorySection.remove();
    // }
  
    // const fullScreen = document.createElement("div");
    // fullScreen.id = "fullScreen";
    // fullScreen.className = "location-fullscreen";
    // fullScreen.addEventListener("click", exitFullScreen);
  
    // const newSection = document.createElement("section");
    // newSection.id = "category-container";
    // newSection.className = "category-container";
    // newSection.setAttribute("data-key", category);
    switch (route) {
      case "characters":
        {
          getCategoryData(route)
           
        }
  
        break;
  
      case "comics":
        {
        //   quotesData[category].map((item) => {
        //     const newDiv = createQuoteCard(item);
        //     newSection.appendChild(newDiv);
        //   });
        }
  
        break;
      case "events":
        {
         
            // favM.forEach((item) => {
            //   const newDiv = createQuoteCard(item);
            //   newSection.appendChild(newDiv);
            // });
        
        }
        break;
  
      case "series":
        {
        //   quotesData[category].map((item) => {
        //     const newDiv = createLocationCard(item);
        //     newSection.appendChild(newDiv);
        //     newSection.appendChild(fullScreen);
        //   });
        }
        break;
  
      case "stories":
        {
        //   foundedSearchItems.map((item) => {
        //     const newDiv = createQuoteCard(item);
        //     newSection.appendChild(newDiv);
        //   });
        }
  
        break;
  
      default:
        {
        //   charData.forEach((item) => {
        //     const newDiv = createCharCard(item);
        //     newSection.appendChild(newDiv);
        //   });
        }
        break;
    }
  
    // main.appendChild(newSection);
  };