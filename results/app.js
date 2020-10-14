import { POKEMON } from '../pokemon/pokemon.js';

function getPokemonFromLocalStorage(key) {
    const localPokemon = window.localStorage.getItem(key);

    return JSON.parse(localPokemon);
}

const pokemonResultsArray = getPokemonFromLocalStorage(POKEMON);

const captureData = pokemonResultsArray.filter((item) => item.capture);
console.log(captureData);
const capturedPokemon = captureData.map((item) => {
    item.pokemon,
        item.capture;
});
console.log(capturedPokemon);





const encounterData = pokemonResultsArray.filter((item) => item.encounter);
console.log(encounterData);





// const encounteredArray = pokemonResultsArray.map(element => {
//     for (let i = 0; i < pokemonResultsArray.length; i++) {
//         return pokemonResultsArray[i].encounter;
//     }
// });
// console.log(encounteredArray);

// const capturedArray = pokemonResultsArray.find(element => {

// } element.capture);
// console.log(capturedArray);

