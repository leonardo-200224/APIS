## ¿Cómo implementar eventos en JavaScript para manipular HTML?

El manejo de eventos es una parte esencial en el desarrollo web interactivo. Añadir eventos a elementos HTML te permitirá cambiar colores, textos o ejecutar funciones específicas cuando ocurran ciertas acciones, como clics o movimientos del mouse. En este artículo, te guiaré a través de un proceso detallado para implementar eventos en JavaScript, asegurando que tus aplicaciones web sean más dinámicas y receptivas.

## ¿Cómo seleccionar elementos HTML con JavaScript?

Para manipular elementos HTML con JavaScript, primero necesitas seleccionarlos. Aquí te muestro cómo hacerlo:

```
const container = document.querySelector('.container');
const button = document.querySelector('button');
```

- container: Selecciona un div con la clase container.
- button: Selecciona el único botón presente en el HTML.

## ¿Qué es addEventListener y cómo se utiliza?

addEventListener es un método que permite añadir eventos a elementos de la página. Aquí te explico cómo agregar un evento:

```
container.addEventListener('mouseover', () => {
  container.style.backgroundColor = 'blue';
});

container.addEventListener('mouseout', () => {
  container.style.backgroundColor = 'red';
});
```

- mouseover: Cambia el color de fondo del contenedor a azul cuando el mouse pasa sobre él.
- mouseout: Restaura el color original (rojo) cuando el mouse sale del contenedor.

## ¿Cómo manejar eventos de clic en botones?

El manejo de un evento de clic es fundamental para ejecutar acciones específicas:

```
button.addEventListener('click', () => {
  alert('Botón click');
});
```

Este código mostrará una alerta cada vez que se haga clic en el botón.

## ¿Cómo retirar un evento previamente asignado?

En ciertas situaciones, podrías necesitar retirar un evento para evitar que se ejecute de nuevo. Aquí te muestro cómo conseguirlo:

Primero, encapsula el callback en una función:

```
const buttonClickCallback = () => {
  alert('Botón click');
};

button.addEventListener('click', buttonClickCallback);
```

A continuación, usa removeEventListener dentro de un setTimeout para retirarlo después de un periodo de tiempo:

```
setTimeout(() => {
  button.removeEventListener('click', buttonClickCallback);
}, 2000);
```

- setTimeout: Retira el evento de clic después de 2000 milisegundos (2 segundos).
## ¿Qué herramientas adicionales son útiles al trabajar con eventos?
```
const btnClickCallback = () => {    alert("Button clicked");    button.removeEventListener('click',btnClickCallback); }

button.addEventListener('click', btnClickCallback);

De esa manera una vez que se dé click en el botón el evento queda desactivado.
```