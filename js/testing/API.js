// Heter API Key Auth i TMDB
const API_KEY = "7b084aa8e06d15c09a9025ea46e24773";


const url = `https://api.themoviedb.org/3/movie/100?language=en-US&api_key=${API_KEY}`;


fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));