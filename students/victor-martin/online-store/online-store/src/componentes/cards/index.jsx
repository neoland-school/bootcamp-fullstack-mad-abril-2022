import { useState } from 'react'
import './style.css'


export default function Cards({product}){

let [countAdd, updateCountAdd]=useState(0);

    return(
<div className="borde">
<div className="nombre-precio">
<h3>{product.title}</h3>
<p>{`$ ${product.price}.00`}</p>
</div>
    <div className='foto'><img src={product.images[0]} alt="" className="imagen" /></div>
    <div className="descripcion">        
        <p>{product.description}</p>
    
        <div className="apartado-venta">
            <div className="cantidad">
            <b>QTY</b>
            <div className="cant-add">{countAdd}</div>
            </div>
            <button className='add-bag' onClick={()=>updateCountAdd(++countAdd)}>+ ADD TO BAG</button>
        </div>
    </div>
</div>
    )
}