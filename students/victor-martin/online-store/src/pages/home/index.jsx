import { useEffect, useState } from "react"
import Cards from "../../componentes/cards";

export default function Home(){   

    const [products, updateProducts] = useState([]);

  useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(p => {  updateProducts(p.products)
      console.log(p);})
  },[])

    return(
        <div className='wrap'>
            {/* <Cards></Cards> */}
        {products.map(c=> <Cards key={c.id} product={c}></Cards>)}
        </div>
)}