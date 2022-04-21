
/**
 * La luz de trafico puede ser 'verde',   "ambar"  o "rojo". Crea un algoritmo que dado la luz de tráfico actual por prompt, pinte por pantalla  un semaforo  con la luz indicada y 
 * que indique si el coche puede pasar o debe parar.
 * 
 * /*
 * <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
 *  */

const userOption = prompt('Indique el estado del semáforo');

switch (userOption) {
    case 'verde': {
        document.write(`
            <div class="light"></div>
            <div class="light"></div>
            <div class="light" style="background-color:green;"></div>
        `);
        break;
    }
    case 'ambar': {
        document.write( `
            <div class="light"></div>
            <div class="light" style="background-color:orange;"></div>
            <div class="light" ></div>
        `);
        break;
    }
    case 'rojo': {
        document.write(`
            <div class="light" style="background-color:red;"></div>
            <div class="light"></div>
            <div class="light" ></div>
        `);
        break;
    }
    default: {
        document.write(`
            <div class="light" style="background-color:red;"></div>
            <div class="light"></div>
            <div class="light" ></div>
        `);
    }
}