import './App.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Pagination } from './components/Pagination';
import { Gallery } from './components/Gallery';

export const App = () => {
  const [Url, setUrl] = useState("https://api.pexels.com/v1/curated");
  const [Data, setData] = useState();
  const [Loading, setLoading] = useState(false);
  // key-secundaria =  '563492ad6f917000010000010e9b810d92534db68d3947a7985ed9f4'

  const searchPhotos = (Url, search) => {
    console.log('antes do get')
    setLoading(true)
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
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  };

  const curatedPhotos = (url) => {
    setLoading(true)
    axios.get(url, {
      headers: {
        authorization: '563492ad6f91700001000001a4beb2375b2b461fb9c852f78e1f8df5'
      },
      params: {
        per_page: 24
      }
    })
    .then(res => {
      setData(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  };

  useEffect(() => {
    curatedPhotos(Url)
  }, [Url]);


  const handleNextPage = () => {
    setUrl(Data.next_page)
  };

  const handlePrevPage = () => {
    setUrl(Data.prev_page)
  };

  return (
    <div id="home"  className="App">
      <NavBar searchPhotos={searchPhotos} />
      {/* <Spinner className="spinner" hidden={!Loading} animation="border" role="status"/> */}
      <Gallery Data={Data} visibility={Loading}/>
      <Pagination
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
        Data={Data}
      />
      <Footer />
    </div>

  );
}


