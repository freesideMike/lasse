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



const lastSection = document.getElementById("lastsection")
const imgUrl = "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg";    //strDrinkThumb[i]
const image = document.createElement("img");
const drinkNameHeading = document.createElement("h3");
const licourHeading = document.createElement("h4");
const drinkInstructions = document.createElement("p");


image.id = "bigImage";

image.src = imgUrl;    
image.alt = "Margarita";    //strDrink[i]

drinkNameHeading.innerHTML = "Margarita";    //strDrink[i]
licourHeading.innerHTML = "Gin";   //ingridient[i]
drinkInstructions.innerHTML = "Lorem ipsum dolor sit amet, ut nibh splendide qui, qui brute civibus id. Per no erant oporteat adolescens, ei liber graecis noluisse mel. Nam nulla movet imperdiet id, modus quaestio te vis. Sed ei laudem suscipit partiendo, quis justo philosophia ut pri, sit te oblique philosophia concludaturque.";

lastSection?.appendChild(image);
lastSection?.appendChild(drinkNameHeading);
lastSection?.appendChild(licourHeading);
lastSection?.appendChild(drinkInstructions);

