/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Pagination } from "react-bootstrap";
import ActeursServices from "../Services/ActeursServices";
import MovieCard from "../Components/MovieCard";


const ActeursDetails = () => {
    const {id} =useParams();
    const [acteurs, setActeurs] = useState([]);
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);


    const fetchActeursByID = async () => {

        try {
            const response = await ActeursServices.getActeursByID(id);
            setActeurs(response.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    const fetchFilmsByID = async () => {

        try {
            const response = await ActeursServices.getFilmsByID(id,currentPage);
            
            
            setFilms(response.data.results);
            setMaxPage(response.data.total_pages);
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
        fetchActeursByID();

    }, [id])
    useEffect(() => {
        fetchFilmsByID();

    }, [currentPage])

  
    
    return <Container className="d-flex flex-column align-items-center">
    
        
              <h1 className="d-flex justify-content-center m-3"> {acteurs.name}</h1>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <img  src={"https://image.tmdb.org/t/p/w300" + acteurs.profile_path} alt="picture" />

              {acteurs.name}
              {acteurs.place_of_birth}
              {acteurs.birthday}
              {acteurs.biography}
  
              <div className="d-flex justify-content-center flex-wrap gap-3">
              {films.map((film) => {
          return <MovieCard movieCard={film} key={film.id}></MovieCard>;
        })}
</div>
    
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
 
export default ActeursDetails;