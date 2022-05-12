// 5. Crea un  componente Card como en la siguiente imagen, 
// la imagen debe ser parte de tus archivos del proyecto react, 
// y el boton sera otro componente llamado Boton.

import './style.css';

function Card() {
    return (

        <section class="container__card">
                <div class="header__card">
                    
                </div>
                <div class="footer__card">
                    <h1>MadTree Bedwing</h1>
                    <h4>Type: regional</h4>
                    <h4>City: Cincinnati</h4>
                    <h4>State: Ohio</h4>
                    <h4>Country: United States</h4>
                    <button class="button">Visit the website</button>
                </div>
                
        </section>  
                
        
    )
}

export default Card;