const apiKey = '7b084aa8e06d15c09a9025ea46e24773';
export async function fetchTopTenMovies(apiEndpoint) {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.results.slice(0, 10);
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function loadTopTenMovies(apiEndpoint, containerId) {
    try {
        const movies = await fetchTopTenMovies(apiEndpoint);
        displayTopTenMovies(movies, containerId);
    } catch (error) {
        const errorMessageContainer = document.getElementById('errorMessage');
        errorMessageContainer.textContent = error.message;
    }
}

function displayTopTenMovies(movies, containerId) {
    const topTenMoviesContainer = document.getElementById(containerId);
    const article = document.createElement('article');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const posterUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
        const posterImg = document.createElement('img');
        posterImg.src = posterUrl;
        posterImg.alt = `${movie.title} Poster`;

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${movie.release_date}`;

        const overview = document.createElement('p');
        overview.textContent = movie.overview;

        movieCard.appendChild(posterImg);
        movieCard.appendChild(title);
        movieCard.appendChild(releaseDate);
        movieCard.appendChild(overview);

        article.appendChild(movieCard);
    });

    topTenMoviesContainer.appendChild(article);
}
