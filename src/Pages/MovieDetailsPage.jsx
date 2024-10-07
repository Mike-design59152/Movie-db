import { useNavigate, useParams } from "react-router-dom";
import MoviesServices from "../Services/MoviesServices";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
// import MovieCard from "../Components/MovieCard";


const MovieDetailsPage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
  

    const fetchMovieByID = async () => {

        try {
            const response = await MoviesServices.getMovieByID(id);
            setMovie(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchMovieByID();
    }, [])
    const navigate =useNavigate();

    const navigateTo = (genre)=> {
        navigate("/genre/"+genre.id, {state : {"genre" : genre}});
      }

    return<Container className="d-flex justify-content-center flex-column align-items-center">
    <h1>{movie.original_title}</h1>
    <img  src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={"image-"+movie.title} />
    <p>Budget : {movie.budget}$</p>
    <div className="d-flex gap-3">
    {movie.genres && movie.genres.map((genre) => {
        return <Button variant="primary" key={genre.id}size="lg" onClick={() => {navigateTo(genre)}}>{genre.name}</Button>
    })}
    </div>
    </Container>;
}
 
export default MovieDetailsPage;