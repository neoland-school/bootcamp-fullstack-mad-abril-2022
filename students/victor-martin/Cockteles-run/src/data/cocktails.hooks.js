 import { useEffect, useState } from "react";
 
 

export default function UseCocktails(){

const [cocktails, updateCocktails] = useState([]);

useEffect(()=>{  
fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
.then(res => res.json())
.then(c=>{updateCocktails(c.drinks)
console.log(c);})

},[])

return[cocktails]

 }