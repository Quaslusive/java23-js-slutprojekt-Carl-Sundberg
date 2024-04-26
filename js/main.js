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



document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchSelect = document.querySelector('select');
    const searchResultsContainer = document.getElementById('searchResults');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const query = searchInput.value;
        const searchType = searchSelect.value;

        try {
            let results;
            if (searchType === 'movie') {
                results = await searchMovies(query);
            } else if (searchType === 'people') {
                results = await searchPeople(query);
            } else {
                throw new Error('Invalid search type');
            }

            displaySearchResults(results);
        } catch (error) {
            console.error('Error searching:', error.message);
        }
    });

    function displaySearchResults(results) {




        const searchResultsDiv = document.createElement('div');


        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.textContent = result.title || result.name; // Use title for movies, name for people
            searchResultsDiv.appendChild(resultElement);
        });

        resultContainer.appendChild(searchResultsDiv);
    }
});


/*

const errorMessage = document.querySelector('#errorMessage');

 */


