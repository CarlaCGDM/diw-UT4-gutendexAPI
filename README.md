# diw-UT4-gutendexAPI

## ¿Es bueno incluir estilos CSS de manera directa en nuestro código HTML?

Existen dos maneras de incluir estilos CSS de forma directa en nuestro código HTML: mediante estilos en línea con el atributo "style" dentro de la etiqueta HTML (de manera que solo se aplique el estilo a ese elemento en concreto) y mediante la etiqueta "style" en algún lugar de nuestro documento HTML (de manera que se aplique a todos los elementos del documento).

Por lo general, creo que sólo es recomendable utilizar estilos directos si se trata de un proyecto muy pequeño donde tengamos sólo un documento index.html, en cuyo caso podríamos incluir una etiqueta style en él que aplique estilos a todos sus elementos. Si tenemos más de un fichero HTML, no sería bueno trabajar de esta manera ya que los estilos que definamos en un documento HTML no serán aplicables en el resto de nuestra aplicación (si definimos un estilo de botón en index.html no podremos usarlo en login.html). Usando una hoja de estilos externa enlazada a cada documento HTML, por el contrario, podemos realizar cambios en un sólo lugar que se apliquen a todo nuestro proyecto. A mi parecer, esta es una forma evidentemente superior de trabajar.

Respecto a los estilos en línea, creo que es mejor evitarlos todo lo posible porque son aún más difíciles de encontrar y cambiar al encontrarse dispersos por todo el documento. Trabajar con una página maquetada de este modo sería una pesadilla, incluso en un proyecto muy pequeño. Sin embargo, de vez en cuando, será necesario utilizar estilos en línea, ya que cuando modificamos los estilos de un elemento HTML mediante JS (por ejemplo, para ocultar un botón con "display: none;") lo que estamos realmente haciendo es aplicar un estilo en línea (podemos comprobarlo si inspeccionamos el html de nuestra página según la utilizamos). Esto significa que los estilos en línea son inevitables, pero tenemos que cuidarnos lo máximo posible de usarlos sólo cuando sea absolutamente necesario, ya sea escribiendolos directamente en nuestro documento HTML o modifiandolos mediante código de JS. 

## CSS Validado en W3C

Al checkear el fichero .css generado por parcel en la carpeta dist en el validador de W3C vemos que no encuentra errores. Nos genera también algunas advertencias relacionadas con el uso del pseudoelemento --webkit para modificar el estilo de la scrollbar en algunos navegadores, que tendremos que aceptar porque en principio no hay otra manera de hacerlo.

![image](https://user-images.githubusercontent.com/92323990/206932562-de662413-000a-4f28-8a17-8dfd785dec7e.png)
