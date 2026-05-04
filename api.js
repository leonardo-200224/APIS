const url_api = "https://rickandmortyapi.com/api/character";

requestData(url_api);

async function requestData(url_api) { // await -> espera el resultado, y no sigue hasta que de respuesta.
    const response = await fetch(url_api); // se llama a la api.
    let data = await response.json(); // organiza la informacion en formato json.

    console.log(data.results);

    let lista = document.getElementById("character");// Busca elemento HTML

    for (let index = 0; index < data.results.length; index++) {
        let name = data.results[index].name;//Extrae el nombre
        lista.innerHTML += `<li>${name}</li>`;//Inserta el nombre en HTML
        console.log(name); // muestra en consola que paso
    }
}