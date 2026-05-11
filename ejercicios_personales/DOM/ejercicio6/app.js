const container = document.querySelector(".container");
console.log(container);
const button = document.querySelector("button");

//agrega el elemento al maus entrar en contacto con el elemento
container.addEventListener("mouseover", ()=>{
    container.style.backgroundColor = "blue";
});

//agrega elemento al maus salir del elemento
container.addEventListener("mouseout", ()=> {
    container.style.backgroundColor = "red";
});
/*
button.addEventListener("click", ()=>{
    alert("button clicked! ");
});
 */

const buttonclickcallback = ()=> {
    alert("Button Clicked!");
};

button.addEventListener("click", buttonclickcallback);

// despues de un tiempo retira el evento
setTimeout(()=>{
    button.removeEventListener("click",buttonclickcallback);

}, 2000);

// se guarda el evento en una costante
const btnClickCallback = () => {    alert("Button clicked");  

// al usuario hacer click se remueve el evento
button.removeEventListener('click',btnClickCallback); }

// se agrega el alert al button para que se meustre en el momento que el usuario precione el botton y se genere el evento
button.addEventListener('click', btnClickCallback);