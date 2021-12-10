import './App.scss';

// import { createClient } from 'pexels';
import { useEffect, useState } from 'react';
import axios from "axios";
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Pagination } from './components/Pagination';
import { Gallery } from './components/Gallery';

export const App = () => {
  const [Url, setUrl] = useState("https://api.pexels.com/v1/curated");
  const [Data, setData] = useState();
  const [Photos, setPhotos] = useState([]);
  const [Page, setPage] = useState(1);

  // const client = createClient('563492ad6f917000010000010e9b810d92534db68d3947a7985ed9f4');

  const searchPhotos = (Url, search) => {
    console.log('antes do get')
    axios.get(Url, {
      headers: {
        authorization: "563492ad6f91700001000001a4beb2375b2b461fb9c852f78e1f8df5"
      },
      params: {
        query: search,
        per_page: 20
      }
    })
      .then(res => {
        setData(res.data)
        setPhotos(res.data.photos)
        setPage(res.data.page)
      })
      .catch(err => console.log(err))
  };

  const curatedPhotos = (url) => {
    axios.get(url, {
      headers: {
        authorization: '563492ad6f91700001000001a4beb2375b2b461fb9c852f78e1f8df5'
      },
      params: {
        per_page: 20
      }
    })
    .then(res => {
      setData(res.data)
      setPhotos(res.data.photos)
      setPage(res.data.page)
    })
    .catch(err => console.log(err))
  };

  useEffect(() => {
    curatedPhotos(Url)
  }, [Url]);
  // console.log("esse é o data", Data);
  // console.log("fora useeffect");
  const handleNextPage = () => {
    setUrl(Data.next_page)
    console.log(Data.next_page)
  };
  const handlePrevPage = () => {
    setUrl(Data.prev_page)
    console.log(Data.prev_page)
  };

  return (
    <div id="home">
      <NavBar searchPhotos={searchPhotos}/>
      <Gallery Photos={Photos} />
      {/* <Gallery Photos={Data?.photos ? Data.photos : []}/> */}
      <Pagination
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
        currentPage={Page}
      />
      <Footer />
    </div>

  );
}


