import './style.css'

export default function Header(){
    return(
<header className='Contenedor-header'>
    <h1>La Bodeguita</h1>
    <div className="carrito">
        <div className="icono">carrito</div>
        <div className="cant">0</div>
    </div>
</header>
    )
}