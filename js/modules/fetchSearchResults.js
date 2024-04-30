const API_KEY = "7b084aa8e06d15c09a9025ea46e24773";

export async function searchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error('No results found');
        }

        return data.results;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        const errorMessage = document.querySelector('#resultContainer');
        errorMessage.textContent = 'Det gick inte att hitta en film med namnet ' + query;
        return [];
    }
}
export async function searchPeople(query) {
    const url = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error('No results found');
        }

        return data.results;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        const errorMessage = document.querySelector('#resultContainer');
        errorMessage.textContent = 'Det gick inte att hitta en kändis med namnet ' + query;
        return [];
    }
}

export async function loadSearchResults(query, searchType) {
    let results;
    if (searchType === 'movie') {
        results = await searchMovies(query);
    } else if (searchType === 'person') {
        results = await searchPeople(query);
    }

    await displayResults(results, searchType);
}

export async function displayResults(results, type) {
    const resultContainer = document.querySelector('#resultContainer');
    const container = document.createElement('div');
    container.classList.add('result-container');
    
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result-item');

        if (type === 'movie') {
            const posterUrl = result.poster_path ? `https://image.tmdb.org/t/p/w185${result.poster_path}` : 
                'https://via.placeholder.com/185x278.png?text=Poster+Not+Available';
            const posterImg = document.createElement('img');
            posterImg.src = posterUrl;
            posterImg.alt = `${result.title} Affisch`;

            const title = document.createElement('h3');
            title.textContent = result.title;

            const releaseDate = document.createElement('p');
            releaseDate.textContent = `Utgivningsdatum: ${result.release_date}`;

            const overview = document.createElement('p');
            overview.textContent = result.overview;

            resultDiv.appendChild(posterImg);
            resultDiv.appendChild(title);
            resultDiv.appendChild(releaseDate);
            resultDiv.appendChild(overview);
        } else if (type === 'person') {
            const pictureUrl = result.profile_path ? `https://image.tmdb.org/t/p/w185${result.profile_path}` 
                : 'https://via.placeholder.com/185x278.png?text=Picture+Not+Available';
            const pictureImg = document.createElement('img');
            pictureImg.src = pictureUrl;
            pictureImg.alt = `${result.name} Bild`;

            const name = document.createElement('h3');
            name.textContent = result.name;

            const knownFor = document.createElement('p');
            knownFor.textContent = `Känd för: ${result.known_for_department}`;

            const knownForMovies = document.createElement('p');
            knownForMovies.textContent = `medverkade i: ${result.known_for.map(item => item.title).join(', ')}`;

            resultDiv.appendChild(pictureImg);
            resultDiv.appendChild(name);
            resultDiv.appendChild(knownFor);
            resultDiv.appendChild(knownForMovies);
        }

        container.appendChild(resultDiv);
    });

    resultContainer.appendChild(container);
}
