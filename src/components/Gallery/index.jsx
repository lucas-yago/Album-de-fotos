import "./styles.scss"
import { Spinner } from "react-bootstrap";
import { CardImage } from "../CardImage"
import { Pagination } from "../Pagination";

export const Gallery = ({ Data, visibility, prevPage, nextPage }) => {
  const Photos = Data ? Data.photos : [];

  return (
    <div className="container-gallery">
      {visibility
        ? <Spinner className="spinner" animation="border" role="status" variant="primary" />
        : (<div className="galery-area" >
          {Photos.map((photo, index) => (
            <CardImage
              key={index}
              image={photo.src.portrait}
              photographer={photo.photographer}
            />
          ))}
        </div >)
      }
      {Data && Data.total_results > Photos.length && !visibility &&
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          Data={Data}
        />
      }
    </div>
  );
};
