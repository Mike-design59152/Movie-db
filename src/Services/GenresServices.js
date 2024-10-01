import axios from "axios";



function getAllGenres() {
    return axios.get("https://api.themoviedb.org/3/genre/movie/list?language=fr-FR" ,{
        headers : {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTcyNzY5NzIxMy45NTAxMzcsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zE09kAtaA2YdztVg9XZXMODM14mJ-IBuC8QAxG9k3PMeyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTQ4M2EzZjA4YTk5NjAzOTEwYTYyMTk3MDAzNDRmZSIsIm5iZiI6MTcyNzc4MjkxNC45NTg5ODYsInN1YiI6IjY2ZmE5MmQ4YzU5YTJkYjMyZGQwMGI5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z4_cvOIOhYKA48DGn1DBMilh0hvyl8UvE8u6sbjmCsM"
        }
    });
}

export default {
    getAllGenres,
}