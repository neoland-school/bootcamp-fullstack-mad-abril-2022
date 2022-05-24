import './style.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import CardCocktails from '../../components/CardCocktails'

function Home () {


  const [cocktail, setcocktails] = useState([])
  const [cocktailsFiltered, setcocktailsFiltered] = useState([])
// console.log(caracthers);
  
useEffect(()=>{

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
.then(res => res.json())
.then(c => {setcocktails(c.drinks)

     console.log(c);
})
},[])


return (

    <>

    <CardCocktails></CardCocktails>
    <Nav></Nav>
    <Footer></Footer>
          
        <div>
            {cocktail.map(c=> <CardCocktails key={c.id} cocktail={c}></CardCocktails>)}
        </div> 
      
    </>
)


}

export default Home;