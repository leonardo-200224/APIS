const fetchpoke = async () => {
    try{
        const pokeapi = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        const data = await pokeapi.json();
        console.log(data);
    }catch {
        console.log(err);
    } finally {
        console.log("Termino esta prueba.");
    }

}

fetchpoke();