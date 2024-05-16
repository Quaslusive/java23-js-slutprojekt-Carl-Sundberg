const API_KEY = "7b084aa8e06d15c09a9025ea46e24773";
export async function fetchMovies(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status >= 500) {
                throw new Error('Serverfel: Det gick inte att hämta data');
            } else {
                throw new Error('Nätverksfel: Det gick inte att hämta data');
            }
        }
        const data = await response.json();
        return data.results.slice(0, 10);
    } catch (error) {
        const errorMessage = document.querySelector('#result-container');
        errorMessage.innerHTML = '';
        errorMessage.textContent = error.message;
        throw error;
    }
}

function displayMovies(movies) {
    const resultContainer = document.querySelector('#result-container');
    resultContainer.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('result-container');

    movies.forEach(movie => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result-item');

        const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
            : 'https://via.placeholder.com/185x278.png?text=Poster+Not+Available';
        const posterImg = document.createElement('img');
        posterImg.src = posterUrl;
        posterImg.alt = `${movie.title} Affisch`;

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Utgivningsdatum: ${movie.release_date}`;

        const overview = document.createElement('p');
        overview.textContent = movie.overview;

        resultDiv.appendChild(posterImg);
        resultDiv.appendChild(title);
        resultDiv.appendChild(releaseDate);
        resultDiv.appendChild(overview);

        container.appendChild(resultDiv);
    });

    resultContainer.appendChild(container);
}

export async function loadPopularMovies() {
    try {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const movies = await fetchMovies(url);
        displayMovies(movies);
    } catch (error) {
        console.error(error.message);
        const errorMessage = document.querySelector('#result-container');
        errorMessage.innerHTML = '';
        errorMessage.textContent = error.message;
    }
}

export async function loadRankedMovies() {
    try {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
        const movies = await fetchMovies(url);
        displayMovies(movies);
    } catch (error) {
        console.error(error.message);
        const errorMessage = document.querySelector('#result-container');
        errorMessage.innerHTML = '';
        errorMessage.textContent = error.message;
    }
}
