import axios from "axios";

function getAllActeurs(Page) {
    return axios.get(
      "https://api.themoviedb.org/3/person/popular?language=fr-FR&page="+Page,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQ4M2EzZjA4YTk5NjAzOTEwYTYyMTk3MDAzNDRmZSIsIm5iZiI6MTcyNzc4MjkxNC45NTg5ODYsInN1YiI6IjY2ZmE5MmQ4YzU5YTJkYjMyZGQwMGI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z4_cvOIOhYKA48DGn1DBMilh0hvyl8UvE8u6sbjmCsM",
        },
      }
    );
  }

  function getActeursByID (id) {
    return axios.get("https://api.themoviedb.org/3/person/"+id+"?language=fr-FR",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQ4M2EzZjA4YTk5NjAzOTEwYTYyMTk3MDAzNDRmZSIsIm5iZiI6MTcyNzc4MjkxNC45NTg5ODYsInN1YiI6IjY2ZmE5MmQ4YzU5YTJkYjMyZGQwMGI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z4_cvOIOhYKA48DGn1DBMilh0hvyl8UvE8u6sbjmCsM",
        },
      }
    );
  }
  function getFilmsByID (idActeurs, page) {
    return axios.get("https://api.themoviedb.org/3/discover/movie?language=fr&with_people="+idActeurs+"&page="+page,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQ4M2EzZjA4YTk5NjAzOTEwYTYyMTk3MDAzNDRmZSIsIm5iZiI6MTcyNzc4MjkxNC45NTg5ODYsInN1YiI6IjY2ZmE5MmQ4YzU5YTJkYjMyZGQwMGI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z4_cvOIOhYKA48DGn1DBMilh0hvyl8UvE8u6sbjmCsM",
        },
      }
    );
  }








  export default {
    getAllActeurs,
    getActeursByID,
    getFilmsByID,

  }