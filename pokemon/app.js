import { rawPokemonData, POKEMON } from './pokemon.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.poke-poke');
const encounterSpan = document.querySelectorAll('.encounters');
const nextDiv = document.querySelector('#next');
const nextButton = document.querySelector('button');
const pokeballSpan = document.getElementById('pokeballs');
const timesCapturedSpan = document.querySelectorAll('.captures');

let pokeballs = 10;

// obj[pokemon.id] = obj[pokemon.id] + 1?

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

function createPokemon() {
    let pokemon1 = getRandomPokemon(rawPokemonData);
    let pokemon2 = getRandomPokemon(rawPokemonData);
    let pokemon3 = getRandomPokemon(rawPokemonData);

    while (pokemon1.id === pokemon2.id || pokemon2.id === pokemon3.id || pokemon1.id === pokemon3.id) {
        pokemon2 = getRandomPokemon(rawPokemonData);
        pokemon3 = getRandomPokemon(rawPokemonData);
    }

    return [pokemon1, pokemon2, pokemon3];
    // Save encountered to local storage with saveToLocalStorage?
}

function renderPokemon(pokemon) {
    radios[0].setAttribute('pid', pokemon[0].id);
    radios[1].setAttribute('pid', pokemon[1].id);
    radios[2].setAttribute('pid', pokemon[2].id);

    images[0].src = pokemon[0].url_image;
    images[1].src = pokemon[1].url_image;
    images[2].src = pokemon[2].url_image;
}

function renderEncounterSpan(pokemon) {
    encounterSpan[0].textContent = pokemon[0].encounter;
    encounterSpan[1].textContent = pokemon[1].encounter;
    encounterSpan[2].textContent = pokemon[2].encounter;
}

function renderCaptureSpan(pokemon) {
    timesCapturedSpan[0].textContent = pokemon[0].capture || 0;
    timesCapturedSpan[1].textContent = pokemon[1].capture || 0;
    timesCapturedSpan[2].textContent = pokemon[2].capture || 0;
}

function createAndRender() {
    const pokemon = createPokemon();
    pokemon.map(incrementEncounter);

    renderPokemon(pokemon);
    renderEncounterSpan(pokemon);
    renderCaptureSpan(pokemon);
}

// Initialize render
createAndRender();

nextButton.addEventListener('click', () => {
    // Update render
    createAndRender();

    --pokeballs;
    pokeballSpan.textContent = pokeballs;

    if (pokeballs === 0) {
        // store rawPokemonData in local storage
        window.location = '../results/index.html';
    }

    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        images[i].style.opacity = 1;
    }

});

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {

        nextDiv.classList.remove('hidden');

        for (let i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
            images[i].style.opacity = .5;
        }

        const id = e.target.getAttribute('pid');
        const pokemon = findById(rawPokemonData, Number(id));

        incrementCapture(pokemon);
        // Save captured to local storage with saveToLocalStorage?
    });
}

function saveToLocalStorage(key, value) {
    let stringyData = JSON.stringify(value);

    localStorage.setItem(key, stringyData);

    return JSON.parse(stringyData);
}

function incrementEncounter(pokemon) {
    pokemon.encounter = pokemon.encounter ? pokemon.encounter + 1 : 1;

    return pokemon;
}

function incrementCapture(pokemon) {
    pokemon.capture = pokemon.capture ? pokemon.capture + 1 : 1;

    return pokemon;
}