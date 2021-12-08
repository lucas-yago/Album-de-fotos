
import "./styles.scss"
import { CardImage } from "../CardImage"

export const Gallery = ({ Photos }) => {
  return (
    <div className="container-galery">
      {Photos.map((photo, index) => (
        <CardImage
          key={index}
          image={photo.src.portrait}
          photographer={photo.photographer}
        />
      ))}
    </div>
  );
};
