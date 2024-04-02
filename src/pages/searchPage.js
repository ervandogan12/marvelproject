import { getData } from "../data.js";
import { createCard } from "../views/cathegoryPageView.js";

export const searchHandler = async (inputValue) => {

if (inputValue!==undefined) {
    const searchText = inputValue.toLowerCase();
    const categoryData = await getData("stories");
    let foundedSearchItems = [];
    categoryData.data.results.map((item) => {

      if (item.title.toLowerCase().includes(searchText)) {

        foundedSearchItems.push(item);
      }
    });
  
    foundedSearchItems.map((arrayElement) => {
      createCard(arrayElement, "stories");
    });
}

};
