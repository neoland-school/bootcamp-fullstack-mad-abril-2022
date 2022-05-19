


/**
 * El contexto es una variable que me ayuda a guardar información para que otros componentes
 * puedan consultarla y reaccionar a sus cambios, es decir, si un componente A (este donde este en la web)
 * modifica el context, el componente B (que escucha el contexto), se refresca con el nuevo valor
 * 
 * 1. Crear una variable de contexto con la función de React llamada `createContext(_initial-value_)`
 *      Esto lo solemos crear en un archivo propio llamado XXX.context.js y exportar esa varible
 *      Este archivo se crea en la entidad XXX (en una carpeta XXX), dentro de shared, src
 * 
 *      XXX -> representa la entidad de la información que queremos almacenar y compartir
 *              ej: ShoppingCart, i18n, l10n, Theming o ...
 * 
 * 2. Creamos un componente que se llame `XXXProvider`, es un componete de react que utiliza 
 *    el Provider de un contexto. Este Provider de un contexto es un componente que proporciona react
 *    para darle valor a ese contexto (asignación del valor). Todo componente que esté como hijo de este 
 *    Provider puede recuperar el valor de este contexto en su función del componente.
 * 
 *    Para crear este componente debemos saber que TODOS los componentes que creamos de react tienen una prop
 *    que hasta ahora no conociamos. Su nombre es `children` que representa el DOM hijo que tiene ese componente
 * 
 *    Utilizar este componente, dos posibilidades:
 *      1. Si la información se comparte entre páginas, el Provider debe envolver en el app.js al router
 *      2. Si la información solo se debe compartir dentro de una misma página, el Provider envuelve el primer elemento de esa página
 * 
 * 3. El componente que quiere obtener el valor del contexto tiene que usar un hook llamado `useContext()`
 *      Este hook recibe como input LA VARIABLE DEL PUNTO 1. (que tendremos que importar de su archivo)
 *      Este hook como output devuelve el valor actual del context.
 *          function MyComponent(){
 *              const theme = useContext(ThemeContext); // theme tendrá el valor del provider (punto 2) mas cercano
 *          }
 * 
 * 4. Modificar el componente Provider (punto 2) para añadir un state interno (useState) y pasar como value 
 *    tanto el valor como la función de actualización para que asi cuando se haga un useContext tenga un función
 *    que actualice el context.
 */

import ComponentB from "./component-b";
import ComponentA from "./component-a";
import UserProvider from "../../shared-components/user/user.provider";

function DemoContext(){

    return (
        
        <main>
            <ComponentA>
                <a target='_blank' href="https://google.com" rel="noreferrer">Hola bootcamp</a>
            </ComponentA>
            <ComponentA>Adios bootcamp</ComponentA>
            <ComponentB></ComponentB>
        </main>
    )
}

export default DemoContext;

// i18n --> Internationalization --> i18n

//, l10n --> Localization --> L10n
