export async function topTenRated() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA4NGFhOGUwNmQxNWMwOWE5MDI1ZWE0NmUyNDc3MyIsInN1YiI6IjY2MWZhNmJlZDE4ZmI5MDE0YWNhMjcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s9UItDc2dl15dfkoAKNb7mlrPP1rxE7spXAyPmxBNYw'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Filter to include only the first 10 entries
            const firstTenEntries = data.results.slice(0, 10);
            console.log(firstTenEntries);
        })
        .catch(err => console.error('Fetch error:', err));
}

export async function topTenPopular() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA4NGFhOGUwNmQxNWMwOWE5MDI1ZWE0NmUyNDc3MyIsInN1YiI6IjY2MWZhNmJlZDE4ZmI5MDE0YWNhMjcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s9UItDc2dl15dfkoAKNb7mlrPP1rxE7spXAyPmxBNYw'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Filter to include only the first 10 entries
            const firstTenEntries = data.results.slice(0, 10);
            console.log(firstTenEntries);
        })
        .catch(err => console.error('Fetch error:', err));

}
