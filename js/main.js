import {loadPopularMovies} from "./topTenPopularMovies.js";
import {loadRankedMovies} from "./topTenRankedMovies.js";
import { searchMovies, searchPeople } from './search.js';


const btnTopPop = document.querySelector("#topPop");
const btnTopRank = document.querySelector("#topRank");
const form = document.querySelector("#searchForm");

const resultContainer = document.getElementById('resultContainer');

btnTopPop.addEventListener('click', () => {
    resultContainer.innerHTML = ""; // Reset the container
    loadPopularMovies();
});

btnTopRank.addEventListener('click', () => {
    resultContainer.innerHTML = ""; // Reset the container
    loadRankedMovies();
});


/*

const errorMessage = document.querySelector('#errorMessage');

 */


