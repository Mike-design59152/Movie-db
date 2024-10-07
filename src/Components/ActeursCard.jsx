/* eslint-disable react/prop-types */
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ActeursCard = ({ acteursCard }) => {
  const navigate = useNavigate();

  const navigateTo = (id) => {
    navigate("/acteurs/"+id);

  }
  return (
    <>
      <Card style={{ width: "18rem" }} onClick={()=> {navigateTo(acteursCard.id)}}>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + acteursCard.profile_path}/>
        <Card.Body>
          <Card.Title>{acteursCard.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default ActeursCard;
