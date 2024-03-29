import { getData } from "../data.js";


export const getCategoryData = async (route)=>{

    const characterData= await getData(route)
    const characterDataArray= characterData.data.results 
    console.log(characterDataArray)
    characterDataArray.forEach(arrayElement => {
        createCharCard(arrayElement)
    });

}



