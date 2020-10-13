import { rawPokemonData } from 'pokemon.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');
const nextDiv = document.querySelector('#next');
const nextButton = document.querySelector('button');
const nextEncounter = document.querySelector('#next-encounter');

let pokeballs = 10;
let timesEncountered = 0;
let timesCaptured = 0;

// const remainingPokemon = rawPokemonData.slice();

function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}













// function resultsRedirect() {
//     if (pokeballs === 0) {
//         window.location = "../results/index.html"
//     }
// }

// function encounterChoice() {
//     if (pokeballs === 0) {
//         window.location = "../results/index.html"
//     }
//     nextDiv.classList.add('hidden');

//     for (let i = 0; i < radios.length; i++) {
//         radios[i].disabled = false;
//         radios[i].checked = false;
//         images[i].style.opacity = 1;
//         timesEncountered++;
//     }

//     let pokemon = getRandomPokemon(rawPokemonData);

//     while (pokemon.id === pokemon.id) {
//         pokemon = getRandomPokemon(rawPokemonData);
//     }

//     pokemon.textContent = pokemon.pokemon;
//     radios.value = pokemon.id;
//     images.src = pokemon.url_image;

//     for (let i = 0; i < radios.length; i++) {
//         radios[i].addEventListener('change', (e) => {
            
//             pokeballs--;
//             nextDiv.classList.remove('hidden');
            
//             for (let i = 0; i < radios.length; i++) {
//                 radios[i].disabled = true;
//                 images[i].style.opacity = .5;
//             }

//             const capturedpokemon = e.target.value === pokemon.id;

//             if (capturedpokemon) {
//                 timesCaptured++;
//                 nextEncounter.textContent = `${capturedpokemon} has been captured!`;
//             }
//         });
//     }
// }