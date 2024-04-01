import { getCategoryData } from "./pages/cathegoryPage.js";
import { getFavoritesData } from "./pages/getFavoritesData.js";
import { categoryToggle } from "./views/categoryStarter.js";

export const categoryRoute = async (route) => {
  categoryToggle();

  if (route !== "favorites") {
    getCategoryData(route);
  } else {
    getFavoritesData();
  }
};
