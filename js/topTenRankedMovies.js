const apiKey = '7b084aa8e06d15c09a9025ea46e24773';

export async function fetchRankedMovies() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.results.slice(0, 10); 
    } catch (error) {
        throw new Error(error.message);
    }
}

function displayRankedMovies(movies) {

    const topTenMoviesContainer = document.querySelector('#resultContainer');
    const movieContainer = document.createElement('div');

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

        movieContainer.appendChild(movieCard);
    });

    topTenMoviesContainer.appendChild(movieContainer);
}


export async function loadRankedMovies() {
    try {
        const movies = await fetchRankedMovies();
        displayRankedMovies(movies);
    } catch (error) {
        const errorMessageContainer = document.getElementById('errorMessage');
        errorMessageContainer.textContent = error.message;
    }
}

