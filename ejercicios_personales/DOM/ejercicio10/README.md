Construir un gestor de tareas desde cero con JavaScript es una de las formas más efectivas de practicar manipulación del DOM, manejo de eventos y persistencia de datos. A lo largo de este recorrido se explica paso a paso cómo capturar información de un formulario, crear elementos dinámicamente y mantener los datos entre sesiones gracias a una web API muy útil.

## ¿Qué funcionalidades tiene el task manager?

El proyecto final es una aplicación visualmente sencilla pero con características clave que demuestran conceptos fundamentales del desarrollo frontend [0:03]:

Cambiar el tema de la interfaz con un botón toggle.
Agregar tareas a una lista mediante un formulario.
Modificar y borrar tareas existentes.
Persistencia de datos: al refrescar el navegador, las tareas y el tema seleccionado se mantienen.
Esa persistencia se logra utilizando Local Storage [1:07], una web API que permite almacenar datos en el navegador del usuario. Esto significa que la información sobrevive incluso cuando se cierra o se recarga la página, sin necesidad de un servidor o base de datos.

Un detalle importante es que en el HTML existe una tarea hardcodeada como ejemplo [0:44]. Cada vez que se refresca la página, esa tarea aparece por defecto. Si se elimina del código HTML, deja de mostrarse, lo que confirma que el resto de tareas provienen exclusivamente de Local Storage.

## ¿Cómo se estructura el HTML y el JavaScript inicial?

La estructura HTML es sencilla: un formulario con un input para escribir la tarea, un botón de Add Task y un contenedor tipo lista donde se agregan los elementos [1:24]. El CSS se maneja en un archivo independiente para mantener el código organizado.

Desde JavaScript, lo primero es obtener referencias a los elementos del DOM que se van a manipular. Se utilizan dos constantes principales [2:15]:

taskForm: referencia al formulario, obtenida con document.getElementById usando el ID específico del formulario.
taskList: referencia al contenedor donde se renderizan las tareas.
javascript const taskForm = document.getElementById('task-form'); const taskList = document.getElementById('task-list');

Usar getElementById es la forma más directa de seleccionar un elemento cuando se cuenta con un ID único en el HTML [2:30].

## ¿Cómo se captura el valor del formulario con el evento submit?

Con el elemento del formulario ya disponible, se le agrega un event listener de tipo submit [3:02]. Este evento se dispara cuando el usuario presiona Enter o hace clic en el botón de envío.

javascript taskForm.addEventListener('submit', function(event) { event.preventDefault();

const taskInput = document.getElementById('task-input'); const task = taskInput.value;

console.log(task); });

## ¿Por qué se usa preventDefault?

El método event.preventDefault() evita el comportamiento por defecto del formulario [3:30], que normalmente recarga la página al hacer submit. Sin esta línea, los datos se perderían con cada envío porque el navegador refrescaría todo el contenido.

## ¿Cómo se obtiene el valor del input?

Dentro del callback del evento, se selecciona el input por su ID y se accede a su propiedad .value [4:05]. Esa propiedad contiene el texto que el usuario escribió. El valor se almacena en una constante llamada task.

Existe otra forma de acceder a los campos de un formulario: utilizar la propiedad elements del formulario para buscar por atributos como type o name [4:40]. Sin embargo, seleccionar directamente por ID resulta más sencillo y legible.

Al probar en la consola del navegador, al escribir "hola" y presionar Enter, el valor aparece correctamente en la línea del console.log [5:10]. Esto confirma que la captura del dato funciona.

Un error común durante este proceso es olvidar una coma en la sintaxis [4:58], lo que genera un problema que el navegador reporta inmediatamente. Revisar la consola ante cualquier fallo es una práctica esencial.


---
---
```
```
---
---
---


## ¿Por qué los cambios de edición no se guardan en localStorage?

Cuando las tareas ya se almacenan en localStorage, al refrescar la página se recupera la última versión guardada. Sin embargo, si editamos o borramos una tarea, esos cambios solo se reflejan en la interfaz visual (el UI), pero no se envían de vuelta a localStorage. Esto significa que al refrescar, se pierde cualquier modificación y vuelve el estado anterior.

Para resolver esto se necesita una función dedicada —en este caso llamada updateLocalStorage— que se ejecute justo después de confirmar una edición. Su trabajo es obtener una "fotografía" del estado actual de las tareas en el DOM y guardarla.

## ¿Cómo obtener el estado actual de las tareas desde el DOM?

La función updateLocalStorage no recibe parámetros. Lo que hace es consultar directamente el DOM para saber qué tareas existen en ese momento y cuál es su contenido.

¿Qué es un node list y por qué convertirlo en array?

El primer paso es traer todos los elementos <li> que viven dentro del contenedor de tareas [2:48]:

javascript const task = Array.from(taskList.querySelectorAll('li'));

querySelectorAll('li') devuelve un node list, que es una colección de nodos del DOM.
Un node list no permite operaciones como .map(), por lo que no se puede iterar de la misma forma que un array.
Array.from() convierte ese node list en un array completamente funcional que ya se puede manipular [4:02].
¿Cómo extraer solo el texto de cada tarea?

Una vez que tenemos el array de elementos <li>, necesitamos obtener únicamente el contenido de texto, no el nodo HTML completo. Para eso se utiliza .map() combinado con firstChild.textContent [4:30]:

javascript const task = Array.from(taskList.querySelectorAll('li')).map( (li) => li.firstChild.textContent );

.map() recorre cada elemento del array y aplica una transformación.
firstChild accede al primer nodo hijo del <li>, que contiene el texto de la tarea.
textContent extrae el texto plano de ese nodo.
El resultado es un array de strings con el contenido actualizado de cada tarea, incluyendo cualquier edición que se haya realizado.

## ¿Cómo guardar las tareas actualizadas en localStorage?

Con el array de tareas ya listo, el último paso es enviarlo a localStorage usando setItem y JSON.stringify [5:35]:

javascript localStorage.setItem('task', JSON.stringify(task));

JSON.stringify() convierte el array en una cadena de texto JSON, que es el formato que localStorage necesita para almacenar datos.
setItem('task', ...) asigna ese valor a la clave task dentro de localStorage, sobrescribiendo la versión anterior.
Esta función se invoca dentro de la lógica de edición, justo después de que el nuevo contenido se ha insertado en el DOM [1:20]. De esta manera, cada vez que se confirma una edición, el localStorage se actualiza con la información más reciente.

## ¿Cómo verificar que funciona correctamente?

Para comprobar el resultado basta con:

Editar una tarea desde la interfaz.
Abrir las DevTools del navegador y revisar la sección de localStorage.
Confirmar que los nuevos valores aparecen reflejados en la clave task.
Refrescar la página y verificar que las tareas editadas persisten.
Si al refrescar aparece un valor anterior como taskContent, es probable que exista contenido hardcodeado en el HTML que se carga antes de que localStorage tome el control. Ese detalle se resuelve asegurando que la lectura de localStorage tenga prioridad sobre el HTML estático.