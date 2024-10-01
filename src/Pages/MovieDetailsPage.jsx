import { useParams } from "react-router-dom";
import MoviesServices from "../Services/MoviesServices";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";


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
    return<Container className="d-flex justify-content-center flex-column align-items-center">
    <h1>{movie.original_title}</h1>
    <p>Budget : {movie.budget}$</p>
    <div className="d-flex gap-3">
    {movie.genres && movie.genres.map((genre) => {
        return <Button variant="primary" key={genre.id}size="lg">{genre.name}</Button>
    })}
    </div>
    </Container>;
}
 
export default MovieDetailsPage;