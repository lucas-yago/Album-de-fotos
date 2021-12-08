import './App.scss';
// import { createClient } from 'pexels';
// import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Pagination } from './components/Pagination';


export const App = () => {
  // const [Fotos, setPhotos] = useState([]);

  // const client = createClient('563492ad6f917000010000010e9b810d92534db68d3947a7985ed9f4');

  // const curatedPhotos = async (perPage) => {
  //   client.photos.curated({ per_page: perPage }).then((photos) => {
  //   setPhotos(photos.photos);
  //   console.log(photos);
  //   });
  // };

  // useEffect(() => {
  //   curatedPhotos(5);
  // },[]);


  return (
    <div className="App">
      <NavBar />
      {/* {Fotos.map((foto, index) => (
          <div key={index} className="container">
            <img className='image' src={foto.src.tiny} alt="" />
            <div className='barrinha'>
              <p>fotografo: {foto.photographer}</p>
            </div>
          </div>
        ))} */}
      <Pagination
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
        currentPage={Page}
      />
      <Footer />
    </div>

  );
}


