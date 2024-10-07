import axios from "axios";

function getAllGenres() {
  return axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?language=fr-FR",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQ4M2EzZjA4YTk5NjAzOTEwYTYyMTk3MDAzNDRmZSIsIm5iZiI6MTcyNzc4MjkxNC45NTg5ODYsInN1YiI6IjY2ZmE5MmQ4YzU5YTJkYjMyZGQwMGI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z4_cvOIOhYKA48DGn1DBMilh0hvyl8UvE8u6sbjmCsM",
      },
    }
  );
}

function getMoviesByGenreID(currentPage, genreID) {
  return axios.get(
    "https://api.themoviedb.org/3/discover/movie?language=fr-FR&page="+currentPage+"&with_genres="+genreID,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQ4M2EzZjA4YTk5NjAzOTEwYTYyMTk3MDAzNDRmZSIsIm5iZiI6MTcyNzc4MjkxNC45NTg5ODYsInN1YiI6IjY2ZmE5MmQ4YzU5YTJkYjMyZGQwMGI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z4_cvOIOhYKA48DGn1DBMilh0hvyl8UvE8u6sbjmCsM",
      },
    }
  );
}

export default {
  getAllGenres,
  getMoviesByGenreID
};
