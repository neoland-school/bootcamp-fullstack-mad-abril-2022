## Galeria card FLEXBOX

En este ejercicio haré:

* Una galería de Cards 8 cards usando flexbox. La primera y la septima las hago mas grandes.
* Añado una URL para cada card con su imagen.
* Coloco los dots de colores de forma horizontal.

* Al hacer hover con el cursor, aumento la imagen con una escala de 1.1 y 
  la hago rotar a  -1.1 y todo con un delay de 0.2segundos.
* Con esta animación hago cambiar su opacidad al cargar la página, 
  empezando por 0, que pase por 0.3, 0.8 y 1. Todo con una duración de 3sg.

======================
@keyframes mymoveCard {

    0%{
        opacity: 0;
    }
    33%{
        opacity: 0.3;    
    }
    66%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
    }
}
=======================






