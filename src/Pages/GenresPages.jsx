import { useEffect, useState } from "react";
import GenresServices from "../Services/GenresServices";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const GenresPages = () => {
    const [genres, setGenres] = useState([]);
    const navigate =useNavigate();

    const navigateTo = (genre)=> {
      navigate("/genre/"+genre.id, {state : {"genre" : genre}});
    }

    const fetchGenre = async () => {
        try {
          const response = await GenresServices.getAllGenres();
          setGenres(response.data.genres);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchGenre();
      }, []);
    
    return <Container>
    
    <h1 className="d-flex justify-content-center m-3">Genres</h1>
    <div className="d-flex justify-content-center flex-wrap gap-4">
        {genres.map((genre) => {
          return  <Button variant="primary" size="lg" key={genre.id} onClick={() => {navigateTo(genre)}} >{genre.name}</Button>
        })}
      </div>

    
    </Container>;
}
 
export default GenresPages;