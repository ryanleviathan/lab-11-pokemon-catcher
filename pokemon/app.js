import { rawPokemonData } from './pokemon.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.poke-poke');
const nextDiv = document.querySelector('#next');
const nextButton = document.querySelector('button');
const nextEncounter = document.querySelector('#next-encounter');

let pokeballs = 10;
let timesEncountered = 0;
let timesCaptured = 0;

function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}

function getRandomPokemon(rawPokemonData) {
    const index = Math.floor(Math.random() * rawPokemonData.length);

    return rawPokemonData[index];
}

function renderPokemon() {
    const pokemonCapturedArray = [];

    let pokemon1 = getRandomPokemon(rawPokemonData);
    let pokemon2 = getRandomPokemon(rawPokemonData);
    let pokemon3 = getRandomPokemon(rawPokemonData);

    while (pokemon1.id === pokemon2.id || pokemon2.id === pokemon3.id || pokemon1.id === pokemon3.id) {
        pokemon2 = getRandomPokemon(rawPokemonData);
        pokemon3 = getRandomPokemon(rawPokemonData);
    }
    images[0].src = pokemon1.url_image;
    images[1].src = pokemon2.url_image;
    images[2].src = pokemon3.url_image;

    pokemonCapturedArray.push(pokemon1, pokemon2, pokemon3);
    return pokemonCapturedArray;
}

renderPokemon();

nextButton.addEventListener('click', () => {
    renderPokemon();

    pokeballs--;

    if (pokeballs === 0) {
        window.location = '../results/index.html';
    }

    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        images[i].style.opacity = 1;
    }

});


for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {

        nextDiv.classList.remove('hidden');

        for (let i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
            images[i].style.opacity = .5;
        }

        const capturedPokemon = e.target.value;
        const pokemonInCart = findById(capturedPokemon, pokemonCapturedArray);

        pokemonCapturedArray.push(pokemonInCart);

        if (capturedpokemon) {
            timesCaptured++;
            nextEncounter.textContent = `${capturedpokemon} has been captured!`;
            console.log(capturedpokemon);
        }
    });
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
//