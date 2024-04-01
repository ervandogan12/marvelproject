import { getData } from "../data.js";
import { createCard } from "../views/cathegoryPageView.js";

export const searchHandler = async (inputValue) => {

if (inputValue!==undefined) {
    const searchText = inputValue.toLowerCase();
    const categoryData = await getData("stories");
    let foundedSearchItems = [];
    categoryData.data.results.map((item) => {
console.log('10---'+item.title)
      if (item.title.toLowerCase().includes(searchText)) {
        console.log('11---'+item.title)
        foundedSearchItems.push(item);
      }
    });
  
    foundedSearchItems.map((arrayElement) => {
      createCard(arrayElement, "stories");
    });
}

};
