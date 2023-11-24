const axios = require('axios');

const llamarPokemon = async (pokemonId) => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        console.log(`El pokemon N° ${data.id} es ${data.name}`);

    } catch (error) {
        console.log('Pokemon no encontrado');
    }
}

llamarPokemon(3);