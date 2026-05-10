## ¿Qué diferencia a classList de className?

Cuando se utiliza className, cada asignación reescribe todas las clases previas del elemento. Esto obliga a concatenar manualmente las clases existentes con las nuevas, lo que resulta propenso a errores. En cambio, classList es una propiedad que permite acceder a las clases del elemento y agregar más de una clase sin sobrescribir las que ya existen [0:18]. Es decir, funciona como una lista inteligente de clases donde puedes añadir, quitar o consultar cada una de forma independiente.

## ¿Cómo funciona el método toggle con un ejemplo práctico?

El ejercicio consiste en hacer que un menú de navegación aparezca y desaparezca al presionar un botón. El menú ya tiene asignada la clase main-menu y es visible en pantalla. La idea es que, al hacer clic en el botón de toggle visibility, se agregue una clase llamada invisible que oculta el menú. Si se vuelve a hacer clic, esa clase se retira y el menú reaparece [1:10].

El primer paso es seleccionar el botón del DOM:

javascript const button = document.querySelector('button');

Después se le agrega un evento de clic utilizando el método addEventListener [3:00]. Este método, como su nombre indica, agrega un "escuchador de evento" al elemento: cuando detecta que ocurrió el evento especificado, ejecuta la función asociada.

javascript button.addEventListener('click', function() { menu.classList.toggle('invisible'); });

## ¿Qué hace exactamente toggle?

Toggle funciona como un switch [5:38]. Su lógica es simple:

Si la clase no existe en el elemento, la agrega.
Si la clase ya existe en el elemento, la quita.
En el ejemplo, al inspeccionar el HTML en tiempo real se puede observar cómo la clase invisible se agrega y se retira del elemento menú con cada clic, sin afectar la clase main-menu que ya estaba presente [4:48]. Este comportamiento es precisamente lo que diferencia a classList: respeta las clases existentes.

## ¿Qué otros métodos ofrece classList?

Además de toggle, classList incluye varios métodos útiles [5:50]:

add: agrega una clase al elemento.
remove: elimina una clase específica del elemento.
contains: devuelve true o false dependiendo de si el elemento seleccionado contiene o no la clase indicada.
Cada uno de estos métodos permite manipular las clases de forma granular sin necesidad de reescribir todo el atributo class del elemento.

## ¿Por qué es importante addEventListener en la manipulación de estilos?

El método addEventListener es la forma estándar de trabajar con eventos en JavaScript [3:00]. Recibe dos argumentos principales: el tipo de evento (en este caso 'click') y una función anónima que contiene la lógica a ejecutar cuando el evento ocurre. Al combinarlo con classList, se logra que la interfaz reaccione dinámicamente a las acciones del usuario.

Un detalle práctico importante: cuando se escribe código directamente en la consola del navegador, hay que tener cuidado de no presionar Enter antes de tiempo, ya que esto ejecuta el código de forma prematura en lugar de generar un salto de línea [3:42].

La combinación de addEventListener con classList.toggle es un patrón muy común en el desarrollo frontend. Sirve para menús desplegables, modales, acordeones y cualquier componente donde se necesite alternar la visibilidad o el estilo de un elemento con la interacción del usuario.
