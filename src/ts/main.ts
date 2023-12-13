import axios from "axios";
import "./..//scss/style.scss";
import { IDrinkResponse } from "./models/IDrinksResponse";
import { Idrink } from "./models/IDrink";

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const get = async (url: string): Promise<IDrinkResponse> => {
  const response = await axios.get<IDrinkResponse>(url);
  return response.data;
};

const searchDrink = document.getElementById("searchDrink") as HTMLFormElement;
searchDrink.addEventListener("submit", async (e) => {
  e.preventDefault();

  const drinkToSearchFor = (
    document.getElementById("searchText") as HTMLInputElement
  ).value;
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" +
    drinkToSearchFor;
  const drinkdata = await get(url);
  console.log(drinkdata);
  console.log(drinkdata.drinks);
  createHTML(drinkdata.drinks);
});

const drinkContainer = document.getElementById(
  "drinkContainer"
) as HTMLDivElement;

function createHTML(drinkdata: Idrink[]) {
  console.log("hej");
  for (let i = 0; i < drinkdata.length; i++) {
    console.log("hejsan");

    const drinkCard = document.createElement("div");
    //const drinkID = document.createElement("p");
    const drinkTitle = document.createElement("h2");
    /* const drinkIngredient1 = document.createElement("p");
const drinkIngredient2 = document.createElement("p");
const drinkIngredient3 = document.createElement("p");
const drinkIngredient4 = document.createElement("p");
const drinkIngredient5 = document.createElement("p");
const drinkGlass = document.createElement("p");
const drinkInstructions = document.createElement("p");
 */ const drinkImg = document.createElement("img");

    drinkTitle.innerHTML = drinkdata[i].strDrink;
    drinkImg.src = drinkdata[i].strDrinkThumb;
    drinkImg.className = "drinkImg";
    drinkCard.className = "drinkCard";

    drinkCard.appendChild(drinkTitle);
    drinkCard.appendChild(drinkImg);
    drinkContainer.appendChild(drinkCard);
    
    drinkCard.addEventListener("click", () => {
    showBigImage(drinkdata[i]);
    });
}
}



//  last page   // last page   //  last page   // last page   //  last page   // last page   
const lastSection = document.getElementById("lastsection");
const showBigImage = ((data: Idrink) => {
    lastSection.innerHTML = "";
    const imgUrl = data.strDrinkThumb;
    const drinkName = data.strDrink;
    const glass = data.strGlass;
    const description = data.strInstructions;
    
    const ingridients = [data.strIngredient1, data.strIngredient2, data.strIngredient3, data.strIngredient4, data.strIngredient5, data.strIngredient6, data.strIngredient7, data.strIngredient8, data.strIngredient9, data.strIngredient10, data.strIngredient11, data.strIngredient12, data.strIngredient13, data.strIngredient14, data.strIngredient15]


    const image = document.createElement("img");
    const drinkNameHeading = document.createElement("h3");
    const glassHeading = document.createElement("h4");
    const drinkInstructions = document.createElement("p");
    const ingridientsList = document.createElement("ul");
    
    
    
    image.id = "bigImage";
    
    image.src = imgUrl;    
    image.alt = drinkName;  
    
    drinkNameHeading.innerHTML = drinkName;
    glassHeading.innerHTML = glass;
    drinkInstructions.innerHTML = description;
    console.log("skapar bigImage");
    
 
    lastSection?.appendChild(image);
    lastSection?.appendChild(drinkNameHeading);
    lastSection?.appendChild(glassHeading);
    lastSection?.appendChild(ingridientsList);
    lastSection?.appendChild(drinkInstructions);
    for (let i=0; i<ingridients.length; i++){
        if(ingridients[i]!==null) {
            const ingridientItem = document.createElement("li");
            ingridientItem.innerHTML = ingridients[i];
            ingridientsList.appendChild(ingridientItem);
        }    
   }
        
});
