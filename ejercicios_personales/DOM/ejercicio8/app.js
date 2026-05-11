/* 
const form = document.querySelector("#myform");
console.log(form);

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    const name = form.elements["name"].value;
    console.log(name);
});
*/

//Validacion de formularios

const button = document.querySelector("button");
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    
    event.preventDefault(); // Evita el envío del formulario

    const name = form.elements["name"];
    const email = form.elements["email"];

    //Alerta al usuario
    alert(`Hola ${name.value} tu formulario ha sido enviado correctamente y enviamos una confirmación a ${email.value}`);

    //Esconde el form y despliega un mensaje
    form.style.display = "none"; // Oculta el formulario
    form.insertAdjacentHTML("afterend", "<p>Gracias por enviar el formulario</p>"); // Muestra un mensaje de agradecimiento
});