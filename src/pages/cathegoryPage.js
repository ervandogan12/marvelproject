import { getData } from "../data.js";
import { createCard } from "../views/cathegoryPageView.js";


export const getCategoryData = async (route) => {
  const categoryData = await getData(route);
  categoryData.data.results.map((arrayElement) => {
     createCard(arrayElement, route)
  });
};
