
/* el Context es una variable que ayuda a guardar info
para q otros componenntes puedan consultarla y reaccionar a sus cambios
si un componente A se modifica, B q esta escuchando tambien se refresca

1. crear una variabe de contexto con la funcion CreateContext(_initial-value_
)
archivo propio llamado XXX.context.js. se crea en la entidad XXX (es decir carpeta XXX)
osea dentro de: src o shared components

i18n --> Internationalization  -->i18n (multi-idioma)
l10n --> Localization --> l10n (multi-regiones)
g11n --> Globalization (mezcle i18n y l10n)
(se le llama númeronimo, palabra que tiene numeros)

XXX representa la entidad del la info que queremos almacenar y compartir
ej: ShoppinCart, i18n, l10n, Theming o...

2. Crear un componente que se llame XXXProvider, es un componente de React 
que utiliza el provider de un contexto. Este propider de un contexto. Este Provider
de un context q proprorciona react para darle valor a ese context. Todo componente
hijo de este Provider puede recuperer el valor de este context en su funcion
del component.

Para crear este componente, sabremos que TODOS los componentes de react tienen una 
prop(atributos) . Su nombre es `children` q representa el DOM hijoi q tiene ese componente.


Utilizar este componente, dosposibilidades:
-Si la info se comparte entre paginas, el provide
- si la info solo se debe compartir dentro de una


3. El componente q quiere obtener el valor del context tiene q usar un hook llamado
`useContext()` 
Este hook recibe como input la variable del punto 1. (que tendremos q importar de
    su archivo). 
    Este hook como output devuelve el valor actual del context
    function MyComponent(){
        const theme = useContext(ThemeContext); //theme tendra el valor del provider (punto 2) mas cercano
    }

4. Modificare el componente Provider (punto 2) para añadir un state interno (useState) y pasar
como value tanto el valor como la funcion de actualizzaciion para q asi cuando se haga un useContext
tenga una funcion q actualize el context

children sirve 
*/
import ComponentA from "./component-a"
import ComponentB from "./component-b"

function DemoContext() {
return (
    <main>
        <ComponentA><a target='_blank' href='https://google.com'></a>Hola Bootcamp</ComponentA>
        <ComponentA>Adios Bootcamp</ComponentA>
        <ComponentB></ComponentB>
    </main>
)
}
export default DemoContext;