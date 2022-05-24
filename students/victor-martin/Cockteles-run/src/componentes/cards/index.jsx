
import './style.css'



export default function Cards({cocktail}){
    return(
        <>

      

<div className="wrap-card">
    <div className="foto">
        <img src={cocktail.strDrinkThumb} alt= {`foto del cocktail ${cocktail.strDrink}`} />
    </div>
    <div className="nombre-cocktail">{cocktail.strDrink}</div>
</div>
</>
    )
}

