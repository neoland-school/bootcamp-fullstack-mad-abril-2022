import './style.css';
// import CardPicture from '../../assets/images/birra.jpg'
import Boton from '../Boton';

function Card () {

    return (
        <div className='card-container'>
            <div className='card-image'></div>
            {/* <img className='card-image' src={CardPicture} alt="Birra" /> */}
            <div className='info-container'>
                <h2 className='card-product-title'>Birra Sana</h2>
                <ul>
                    <li>Type: Regional</li>
                    <li>City: Cincinnati</li>
                    <li>State: Ohio</li>
                    <li>Country: United States</li>
                </ul>
            </div>
            <Boton></Boton>
        </div>
    )
}

export default Card;