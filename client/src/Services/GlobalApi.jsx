import axios from "axios";
//const axios = require("axios/dist/node/axios.cjs");

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "42bd2fea595fd6a9d80b4beb218cc84c"; // Usar variable de entorno

const movieByGenreBaseURL = `https://api.themoviedb.org/3/trending/all/day?api_key=22cd7faac8facd5c973704f7c6771de0`;

//https://api.themoviedb.org/3/discover/movie?api_key=42bd2fea595

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
  movieByGenreBaseURL,
};
