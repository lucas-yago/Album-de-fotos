
import "./styles.scss"
import { Spinner } from "react-bootstrap";
import { CardImage } from "../CardImage"

export const Gallery = ({ Data, visibility }) => {
  const Photos = Data ? Data.photos : []
  return (
    <>
      {visibility ? <Spinner className="spinner" animation="border" role="status" variant="primary"/>
        : (<div className="container-galery" >
          {Photos.map((photo, index) => (
            <CardImage
              key={index}
              image={photo.src.portrait}
              photographer={photo.photographer}
            />
          ))}
        </div >)
      }
    </>
  );
};
