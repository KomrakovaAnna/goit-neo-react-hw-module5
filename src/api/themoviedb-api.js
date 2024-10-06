import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI4NjczZmY2NDZiMGZiNGNmMmFiMWQwY2QxNGY4NyIsIm5iZiI6MTcyODE3MTY1Mi4zNTc1NjEsInN1YiI6IjY3MDFjM2Y0Zjg3OGFkZmVkMDg1N2MxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7P0paWnzUV9APs1p47FXbngvknZwfXucGW1ZFolgCtU ",
};

export function getTrendingMovies(timeWindow = "day") {
  return axios
    .get(`trending/movie/${timeWindow}`)
    .then((response) => response.data);
}

export function getMovies(query, page = 1) {
  return axios
    .get(`search/movie`, {
      params: {
        query,
        page,
      },
    })
    .then((response) => response.data);
}

export function getMovieDetails(movieId) {
  return axios.get(`movie/${movieId}`).then((response) => response.data);
}

export function getMovieCredits(movieId) {
  return axios
    .get(`movie/${movieId}/credits`)
    .then((response) => response.data);
}

export function getMovieReviews(movieId, page) {
  return axios
    .get(`movie/${movieId}/reviews`, {
      params: {
        page,
      },
    })
    .then((response) => response.data);
}

export function getImagePath(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}
