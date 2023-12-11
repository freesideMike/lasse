import axios from "axios";
import "./../scss/style.scss";
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
  }
}

/* idDrink: string;
    strDrink: string;
    strIngredient1:string;
    strIngredient2:string;
    strIngredient3:string;
    strIngredient4:string;
    strIngredient5:string;
    strGlass: string;
    strInstructions:string;
    strDrinkThumb:string; */
