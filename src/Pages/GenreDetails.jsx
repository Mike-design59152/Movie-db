/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import GenresServices from "../Services/GenresServices";
import { useLocation, useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import { Container, Pagination } from "react-bootstrap";

const GenresDetails = () => {
    const {id} =useParams();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);
    const location =useLocation();

    const fetchMoviesByGenreID = async () => {

        try {
            const response = await GenresServices.getMoviesByGenreID(currentPage,id);
            
            setMovies(response.data.results);
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                  });
            },50)            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchMoviesByGenreID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])
    console.log(location);
    
    return <Container className="d-flex flex-column align-items-center">
    
        
              <h1 className="d-flex justify-content-center m-3">{location.state.genre.name}</h1>
              <div className="d-flex justify-content-center flex-wrap gap-3">
              {movies.map((movies) => {
          return <MovieCard movieCard={movies} key={movies.id}></MovieCard>;
        })}
</div>

<Pagination className="mt-5">
{currentPage > 1 && <>


      <Pagination.First onClick={() => {setCurrentPage(1)}}/>
      <Pagination.Prev onClick={() => {setCurrentPage(currentPage-1)}}/>
      <Pagination.Item onClick={() => {setCurrentPage(1)}}>{1}</Pagination.Item>

</>}
{currentPage - 5 > 0 && <>

<Pagination.Ellipsis onClick={() => {setCurrentPage(currentPage-5)}}/>
</>}

     {(currentPage !=2 && currentPage > 1 ) && <>
      <Pagination.Item onClick={() => {setCurrentPage(currentPage-1)}}>{currentPage - 1}</Pagination.Item>
</>}
      <Pagination.Item active>{currentPage}</Pagination.Item>
{currentPage + 1 < maxPage && <>

      <Pagination.Item onClick={() => {setCurrentPage(currentPage+1)}}>{currentPage + 1}</Pagination.Item>
</>}

{currentPage + 5 <= maxPage && <>
  <Pagination.Ellipsis onClick={() => {setCurrentPage(currentPage+5)}}/>

</>}

      {currentPage < maxPage && <>
      
      <Pagination.Item onClick={() => {setCurrentPage(maxPage)}}>{maxPage}</Pagination.Item>
      <Pagination.Next onClick={() => {setCurrentPage(currentPage+1)}}/>
      <Pagination.Last onClick={() => {setCurrentPage(maxPage)}}/>
      </>}
    </Pagination>



          </Container>
        
      

}
 
export default GenresDetails;