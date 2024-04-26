

// Heter Access Token Auth i TMDB
const BAERER_KEY ='7b084aa8e06d15c09a9025ea46e24773';


const url = 'https://api.themoviedb.org/3/movie/100?language=en-US';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${BAERER_KEY}`
    }
};


fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
