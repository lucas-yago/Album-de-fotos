
import "./styles.scss"
import { CardImage } from "../CardImage"

export const Gallery = ({ Data, visibility }) => {
  const Photos = Data ? Data.photos : []
  return (
    <div className="container-galery" hidden={visibility}>
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
