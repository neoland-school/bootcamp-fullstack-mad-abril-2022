Empezamos el formulario con una etiqueta `<form>`, nos va a ayudar a validar los campos del mismo.

Dentro del formulario (como hijos) pondremos una serie de inputs con sus labels asociadas.

### ¿Como se estructura un input?

```html
<label for="NAME">Name</label> <!-- Nos ayuda a escribir el input -->
<input id="NAME" type="text"> <!-- Genera una caja en el navegador donde el usuario puede escribir -->

```

El atributo `for` tiene que tener el mismo valor que el atributo `id` del input al que va asociado.

Esto le indica al navegador que el input y la label están asociados.

¿Que efecto produce?

Al hacer click en la label, tambien se ha click en el input.

### Otros atributos importances de los inputs.

- **placeholder**: texto que se muestra cuando el input no tiene valor.
- **name**: Es un nombre que le damos para identificar un campo dentro de un mismo formulario. NO se debe repetir entre inputs del MISMO formulario, salvo los input de tipo radio que se agrupan bajo un mismo main. Este atributo es muy importante, porque cuando obtengamos en un futuro el valor de los campos del formulario, lo haremos a través del name del campo.

### Validaciones

Un campo en un formulario tiene muchos estados. Unos de los más importantes es el de si es valido o no lo es.

Para establecer validaciones a un input, tenemos varios atributos.

- **required**: Indica al formulario que el campo es obligatorio.
- **min-lenght**: Indica el tamaño mínimo de longuitud del campo.
- **max-lenght**: Indica el tamaño máximo de longuitud del campo.
- **disable**: Este atributo deshabitila un campo o un botón y el usuario NO puede interactuar con el.

Luego hay inputs que en funcion de su tipo añaden otros atributos de validación:

- **min**: Nos ayudan a establecer el valor minimo que puede tener el campo. 
- **max**: Nos ayudan a establecer el valor máximo que puede tener el campo.

## Envio del formulario

Para poder enviar la información que ha introducido el usuario, debo tener un botón de tipo **submit**.

Cuando el usuario hace click sobre este botón, se produce en la página un evento de tipo submit que es el que manda la información del formulario.

¿Donde se envía?

Por defecto HTML envía el formulario a la URL que indique el atributo **action** de la etiqueta form.


