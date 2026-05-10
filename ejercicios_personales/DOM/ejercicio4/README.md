## ¿Qué son los HTML strings y por qué son útiles para manipular el DOM?

Los HTML strings son cadenas de texto que contienen etiquetas HTML válidas. Aunque inicialmente son solo texto, al inyectarlas en el DOM se convierten en elementos reales del documento [0:49]. Esta técnica permite construir rápidamente nuevos nodos sin necesidad de crearlos uno por uno.

La alternativa es createElement, un método que genera un nodo vacío al cual se le debe asignar contenido (texto u otros elementos) y luego insertarlo manualmente en el DOM [1:05]. Ambas opciones permiten agregar elementos en distintas posiciones dentro del documento.

## ¿Cómo funciona innerHTML para inyectar contenido?

El método innerHTML es la forma más directa de trabajar con HTML strings. Su funcionamiento es sencillo:

Se selecciona el elemento contenedor con document.getElementById [2:07].
Se asigna una cadena de texto con etiquetas HTML a la propiedad innerHTML.
El navegador interpreta ese texto y lo convierte en elementos del DOM.
Por ejemplo, al escribir contentArea.innerHTML = '<p>este es un nuevo párrafo</p>', el contenido previo del contenedor se reemplaza por completo con el nuevo párrafo [2:30]. Este detalle es importante: innerHTML sustituye todo lo que exista dentro del elemento seleccionado.

## ¿Qué ventaja ofrece insertAdjacentHTML sobre innerHTML?

A diferencia de innerHTML, el método insertAdjacentHTML permite agregar contenido sin reemplazar lo que ya existe dentro del contenedor [3:28]. Es una función que recibe dos parámetros: la posición donde se quiere insertar el elemento y la cadena de texto con el HTML.

## ¿Cuáles son las posiciones disponibles en insertAdjacentHTML?

Este método ofrece cuatro posiciones para inyectar contenido [4:40]:

beforebegin: inserta el elemento justo antes del contenedor seleccionado.
afterbegin: lo coloca al inicio, dentro del contenedor, antes del contenido existente.
beforeend: lo agrega al final, dentro del contenedor, después del contenido existente.
afterend: lo posiciona justo después del contenedor, fuera de él.
En el ejemplo práctico se utilizó beforeend para añadir un segundo párrafo debajo del primero sin eliminarlo [3:50]. Al inspeccionar la estructura HTML resultante, ambos párrafos coexisten dentro del mismo contenedor.

## ¿Dónde consultar la documentación oficial de estos métodos?

La documentación de MDN (Mozilla Developer Network) es el recurso más confiable para entender cada posición y su efecto visual [5:15]. Incluye ejemplos gráficos que muestran exactamente dónde se ubicará el nuevo elemento según la posición elegida.

Un dato relevante: alrededor del 80 % de la documentación de programación se encuentra en inglés [5:30]. Sin embargo, MDN ofrece traducciones al español accesibles desde el selector de idioma en la parte superior de la página. La recomendación es familiarizarse con la versión en inglés, ya que suele ser la más actualizada y fiel a los creadores de los estándares.

Dominar estas dos técnicas — innerHTML para reemplazar contenido e insertAdjacentHTML para insertar sin destruir — abre la puerta a construir interfaces dinámicas que respondan a las acciones del usuario en tiempo real. ¿Ya probaste insertar elementos en las cuatro posiciones disponibles? Comparte tu experiencia y las diferencias que encontraste.

<img src="https://static.platzi.com/media/user_upload/inseradjacent-015f615d-75c5-42a9-8dec-9dabeda44fd0.jpg">


```
- Al usar 'innerHTML +=', estamos agregando un nuevo elemento a la lista
- Sin embargo, 'innerHTML' vuelve a renderizar todo el contenido existente del elemento 
- incluido el padre (es decir, toda la lista), lo que puede resultar en un mayor consumo de recursos

```
const listArea = document.getElementById
(`listArea`);
listArea.innerHTML += `<li>Item 5 - js innerHTML</li>`;
```

- Al utilizar 'insertAdjacentHTML', se optimiza la inserción del nuevo elemento. 
- Este método únicamente renderiza el nuevo elemento que se agrega al documento 
-  (en este caso, el <li>), sin necesidad de re-renderizar todo el contenido existente de la lista
- "beforeend" inserta el nuevo <li> al final de la lista, justo antes del cierre de la etiqueta <ul> o <ol>
```
listArea.insertAdjacentHTML(`beforeend`, `<li>Item 6 - js insertAdjacentHTML</li>`);
```
```