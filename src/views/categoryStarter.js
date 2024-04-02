
export const categoryToggle=()=>{

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
}

