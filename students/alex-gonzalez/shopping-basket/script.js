
// variable mediante promp que representa el saldo de la cuenta
const balance = parseFloat(prompt('Introduzca el saldo de la cuenta'));

// luego crea  3 variables numéricas que cada una represente un item de tu cesta (ej: tomates, pescado, etc) de la compra y dales un precio
const tomatoesPrice = 1.45;
const salmonPrice = 15.88;
const meatPrice = 7.61;
const total = tomatoesPrice+salmonPrice+meatPrice;
// Imprimir por pantalla  la siguiente imagen usando solo document write y css, 
// si el numero ingresado es mayor o igual que el total de la compra debera aparecer el boton de comprar de lo contrario no se mostrara.

const hasSufficientBalance = balance >= total;

document.write(`
    <section class="shopping-cart__container">
        <h1 class="shopping-cart__title">Shopping Cart</h1>
        <ul class="list__items-container">
            <li>
                <p>Tomate</p>
                <p>Price</p>
                <p>${tomatoesPrice}</p>
            </li>
            <li>
                <p>Pescado</p>
                <p>Price</p>
                <p>${salmonPrice}</p>
            </li>
            <li>
                <p>Carne</p>
                <p>Price</p>
                <p>${meatPrice}</p>
            </li>
        </ul>
        <footer class="shopping-cart__footer">
            <h4>Cart Totals</h4>
            <p>Total ${total}</p>
            <hr style="width: 25%;">
            <button type="button" 
             class="shopping-cart__buy-button ${hasSufficientBalance ? '' : 'shopping-cart__buy-button--hidden'}"
            >Comprar</button>
        </footer>
    </section>
`);