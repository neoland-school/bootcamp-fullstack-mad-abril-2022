# Formularios

Los formularios nos ayudan a que el usuario pueda introducir información en nuestro sistema.

## Estructura

Empezamos el formulario con una etiqueta `<form>`, nos va a ayudar a validar los campos del mismo.

Dentro del formulario (como hijos) pondremos una serie de inputs con sus labels asociadas.

### ¿Como se estructura un input?

```html

<label for="NAME">Name</label> <!--Nos ayuda a describir el input-->
<input id="NAME" type="text"> <!--Genera una Caja en el navegador donde el usuario puede escribir-->

```

El atributo `for` tiene que tener el mismo valor que el atributo `id` del input al que va asociado.

Esto le indica al navegador que el input y la label están asociados.

¿Que efecto produce?

Al hacer click en la label, tambien se ha click en el input.

### Otros atributos importantes de los inputs

- **placeholder**: texto que se muestra cuando el input no tiene valor
- **name**: Es un nombre que le damos para identificar un campo dentro de un mismo formulario. No se debe repetir entre inputs del MISMO formulario, salvo los input de tipo radio que se agrupan bajo un mismo name. Este atributo es muy importante, porque cuando obtengamos en un futuro el valor de los campos del formulario, lo haremos a través del name.

## Validaciones

Un campo en un formualario tiene muchos estados. Uno de los más importantes es el de si es válido o no lo es.

Para establecer validaciones a un input, tenemos varios atributos:

- **required**: Indica al formulario que el campo es obligatorio.
- **min-length**: Indica el tamaño mínimo de longitud del campo.
- **max-length**: Indica el tamaño máximo de longitud del campo.
- **disabled**: Este atributo deshabilita un campo o un botón y el usuario NO puede interactuar con el.

Luego hay inputs que en función de su tipo añaden otros atributos de validación:

- **min**: Nos ayudan a establer el valor mínimo que puede tener el campo
- **max**: Nos ayudan a establer el valor máximo que puede tener el campo

## Envio del formulario

Para poder enviar la información que ha introducido el usuario, debo tener un botón de tipo **submit**.

Cuando el usaurio hace click sobre este botón, se produce en la página un evento de tipo submit que es el que manda la información del formulario.

¿Donde se envía?

Por defecto HTML envía el formulario a la URL que indique el atributo **action** de la etiqueta form
