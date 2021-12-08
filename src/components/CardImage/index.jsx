import { Card } from "react-bootstrap";
import "./styles.scss";
import { VscAccount } from "react-icons/vsc";

export const CardImage = ({ image, photographer }) => {
  return (
    <Card className="card-container">
      <Card.Img src={image} alt="Card image" className="image" />
      <Card.ImgOverlay className="card-info" >
        <Card.Title id="author"><VscAccount className="authorIcon"/> {photographer}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};
