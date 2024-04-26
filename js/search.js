const apiKey = '7b084aa8e06d15c09a9025ea46e24773';

// Function to search for movies
export async function searchMovies(query) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Function to search for people
export async function searchPeople(query) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
        if (!response.ok) {
            throw new Error('Failed to fetch people data');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error(error.message);
    }
}
