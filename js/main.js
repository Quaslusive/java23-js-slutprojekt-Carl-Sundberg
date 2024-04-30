/*
 This is an application that fetches current popular and highly ranked movies, and that also can search specific 
 movies/actors with the use of the TMDB-API
 */

import { loadSearchResults } from "./modules/fetchSearchResults.js";
import { loadPopularMovies, loadRankedMovies} from "./modules/fetchTop10Movies.js";

const btnTopPop = document.querySelector("#topPop");
const btnTopRank = document.querySelector("#topRank");
const form = document.querySelector("#searchForm");
const resultContainer = document.querySelector('#resultContainer');

btnTopPop.addEventListener('click', async () => {
    resultContainer.innerHTML = "";
    await loadPopularMovies();
});

btnTopRank.addEventListener('click', async () => {
    resultContainer.innerHTML = "";
    await loadRankedMovies();
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = form.querySelector("#searchInput").value;
    const searchType = form.querySelector("#searchType").value;
    resultContainer.innerHTML = "";
    await loadSearchResults(query, searchType);
});
