/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ActeursServices from "../Services/ActeursServices";
// import { useNavigate } from "react-router-dom";
import ActeursCard from "../Components/ActeursCard";
import { Container, Pagination } from "react-bootstrap";

const ActeursPages = () => {

const [acteurs, setActeurs] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);



const fetchAllActeurs = async () => {
    try {
      const response = await ActeursServices.getAllActeurs(currentPage);
      console.log(response.data.results);
      
      setActeurs(response.data.results);
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
  };
  useEffect(() => {
    fetchAllActeurs();
  }, [currentPage]);


    return <Container className="d-flex flex-column align-items-center">
    
    <div className="d-flex justify-content-center flex-wrap gap-4">
        {acteurs.map((acteur) => {
          return  <ActeursCard acteursCard={acteur} key={acteur.id} ></ActeursCard>
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
 
export default ActeursPages;
