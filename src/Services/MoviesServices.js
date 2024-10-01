import axios from "axios";



function getAllMovies(currentPage) {
    return axios.get("https://api.themoviedb.org/3/discover/movie?language=fr-FR&page="+currentPage,{
        headers : {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQ4M2EzZjA4YTk5NjAzOTEwYTYyMTk3MDAzNDRmZSIsIm5iZiI6MTcyNzc4MjU0OS4wMjg1NzcsInN1YiI6IjY2ZmE5MmQ4YzU5YTJkYjMyZGQwMGI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3NGagGd-Lidi7GBz8UOY_0xoW_dHxsrjjFJemcIETY4"
        }
    });
}

function getMovieByID(idMovie){

    return axios.get("https://api.themoviedb.org/3/movie/"+idMovie +'?language=fr-FR',{

        headers : {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQ4M2EzZjA4YTk5NjAzOTEwYTYyMTk3MDAzNDRmZSIsIm5iZiI6MTcyNzc4MjU0OS4wMjg1NzcsInN1YiI6IjY2ZmE5MmQ4YzU5YTJkYjMyZGQwMGI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3NGagGd-Lidi7GBz8UOY_0xoW_dHxsrjjFJemcIETY4"


        }
    })
}





export default {
    getAllMovies,
    getMovieByID,
}