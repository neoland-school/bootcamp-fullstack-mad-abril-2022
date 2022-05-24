

function CardCocktails (cocktail){

    return(
        
        <>
        <link to="./details" state={cocktail}/>
        <div className='card-principal'>
            <img className="image-card" src={cocktail.strDrinkThumb} alt=""/>
        <div className="card-body">
            <h4 className="card-tittle-text">{cocktail.strDrink}</h4>
        </div>
       
         

         </div>
        </>
    )
}

export default CardCocktails;