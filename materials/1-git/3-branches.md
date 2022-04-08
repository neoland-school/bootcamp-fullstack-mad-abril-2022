# Branches (Ramas)

Para no bloquear las líneas principales del desarrollo, git propone la posibilidad de crear ramas, que lineas paralelas del desarrollo que no afectan a la linea principal y que cuando estén completas se pueden unir.

## Operaciones de ramas

1. Listar las que existen en mi repositorio y saber en que rama estoy actualmente

    > git branch

2. Crear una rama nueva. Esta rama partirá del desarrollo que estoy actualmente (en la rama en la que me encuentre).

    > git checkout -b _nombre-rama_

3. Cambiarse a una rama existente.

    > git checkout _nombre-rama_

4. Borrar una rama

    > git branch -D _nombre-rama_

5. Como puedo "meter" mi nuevo código que está en la rama A dentro de main (merge)

    1. Tener el commit hecho en la rama A (Tener el directorio de trabajo limpio)
    2. Cambiarme a la rama destino (main)
    3. Ejecutar el siguiente comando
        > git merge _nombre-rama_

[Docu Comando git branch](https://git-scm.com/docs/git-branch)
