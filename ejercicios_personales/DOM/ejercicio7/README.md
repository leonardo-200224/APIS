```
Estoy viendo en la documentación de EventTarget que .addEventListener( ) acepta hasta tres parámetros (dos obligatorios como señala el profe, pero otro opcional). Una de las opciones de ese tercer parámetro es 'once', que elimina el 'listener' después haberlo usado:

addEventListener(type, listener, options)

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

```

```
boton.addEventListener("click", () => {
    console.log("Solo una vez");
}, { once: true });
```
## elemento.addEventListener(tipo, listener, options);

### options
```
Sirve para configurar cómo funciona el evento.

Puede incluir:

Opción	Función
once: true	El evento se ejecuta una sola vez
capture: true	Usa fase de captura
passive: true	Mejora rendimiento en scroll
```

### Algunos eventos comunes en JavaScript que puedes usar con el método .addEventListener():

**Eventos de ratón:**
- **click:** Ocurre cuando se hace clic en un elemento.
- **dblclick:** Ocurre cuando se hace doble clic en un elemento.
-** mouseover:** Ocurre cuando el puntero del ratón se mueve sobre un elemento.
-** mouseout:** Ocurre cuando el puntero del ratón se mueve fuera de un elemento.
-** mousemove:** Ocurre cuando el puntero del ratón se mueve dentro de un elemento.

**Eventos de teclado:**
- **keydown: **Ocurre cuando se presiona una tecla.
- **keyup:** Ocurre cuando se suelta una tecla.
- **keypress:** Ocurre cuando se presiona una tecla y se mantiene presionada.

**Eventos de formulario:**
- **submit:** Ocurre cuando se envía un formulario.
- **change:** Ocurre cuando el valor de un elemento de formulario cambia.
- **focus:** Ocurre cuando un elemento de formulario gana el foco.
- **blur:** Ocurre cuando un elemento de formulario pierde el foco.

**Eventos de ventana:**
- **load:** Ocurre cuando la página se ha cargado completamente.
- **resize:** Ocurre cuando se cambia el tamaño de la ventana del navegador.
- **scroll:** Ocurre cuando se desplaza la página.

**Eventos de documento:**
- **DOMContentLoaded:** Ocurre cuando el documento HTML ha sido completamente cargado y parseado, sin esperar a que se carguen las hojas de estilo, imágenes y subframes.