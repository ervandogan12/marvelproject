

export const insertFavorites = async (item) => {
    let favorites = [];
    const favoritesFromLocal = localStorage.getItem("favorites");

    const charData = await getCharacters()

  if (favoritesFromLocal) {
    favorites = JSON.parse(favorites);
  }
    charData.forEach((chrItem) => {
  
  
      if (sentence === item.sentence) {
  
        if (favorites) {
  
          favM.push({
            character: item.character,
            sentence: item.sentence,
          });
  
        } else {
          favM = [
            { character: item.character, sentence: item.sentence },
          ];
      
        }
      }
    });
  
   localStorage.setItem("favM", JSON.stringify(favM));
  categoryRender(category);
  };

  async function getCharacters() {
    const categoryData = await getData(route);
    return categoryData.data.results;
  }