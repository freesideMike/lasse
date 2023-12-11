import './../scss/style.scss'



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

