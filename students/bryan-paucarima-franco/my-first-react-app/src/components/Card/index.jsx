import PrintButtom from '../Boton';
import Image from '../../assets/imagenes/img.png'
import './styles.css'

function PrintCard () {
    return (
        <div className='container'>
            <img className='image' src={Image} />
            <h1 className='tittle'>MadTree Brewing</h1>
            <p className='text'>Type: regional</p>
            <p className='text'>City: Cincinnati</p>
            <p className='text'>State: Ohio</p>
            <p className='text'>Country: United States</p>
            <PrintButtom></PrintButtom>

        </div>
    )
}

export default PrintCard;