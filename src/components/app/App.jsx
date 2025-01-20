import { useEffect, useState } from 'react';
import AppHeader from '../app-header/AppHeader';
import { Route, Routes } from 'react-router-dom';
import { getCatApi } from '../..//utils/api';
import Gallery from '../gallery/Gallery';
import ListCats from '../list-cats/ListCats';
import ListLikedCats from '../list-liked-cats/ListLikedCats';
import useInfiniteScroll from '../../hooks/useInfinityScroll';
import LoadMore from '../load-more/LoadMore';

const App = () => {
  const [cats, setCats] = useState([]);
  const [likedCats, setLikedCats] = useState([]);
  const [page, setPage] = useState(0);

  const loadMoreCats = () => {
    getCatApi(page)
      .then((newCats) => {
        setCats((prevCats) => [...prevCats, ...newCats]);
        setPage(page + 1);
      })
  }

  const observer = useInfiniteScroll(loadMoreCats);

  useEffect(() => {
    loadMoreCats();
  }, []);

  return (
  <>
    <AppHeader />
    <section className="gallery">
      <Routes>
        <Route 
          path='/' 
          element={
          <Gallery>
            <ListCats allCats={cats} likedCats={likedCats} setLikedCats={setLikedCats}/>
            <LoadMore />
          </Gallery>
          }
        />
        <Route 
          path='/liked' 
          element={
          <Gallery>
            <ListLikedCats likedCats={likedCats} setLikedCats={setLikedCats}/>
          </Gallery>
          } 
        />
      </Routes>
    </section>
  </>
)}

export default App;