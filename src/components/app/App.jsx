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
	const [isLoading, setIsLoading] = useState(false);

	const loadMoreCats = () => {
		if (isLoading) return;
		setIsLoading(true);

		getCatApi(page).then((newCats) => {
			setCats((prevCats) => [...prevCats, ...newCats]);
			setPage((prevPage) => prevPage + 1);
			setIsLoading(false);
		});
	};

	const observer = useInfiniteScroll(loadMoreCats);

	useEffect(() => {
		loadMoreCats();
	}, []);

	return (
		<>
			<AppHeader />
			<section className='gallery'>
				<Routes>
					<Route
						path='/'
						element={
							<Gallery>
								<ListCats
									allCats={cats}
									likedCats={likedCats}
									setLikedCats={setLikedCats}
								/>
								<LoadMore />
							</Gallery>
						}
					/>
					<Route
						path='/liked'
						element={
							<Gallery>
								<ListLikedCats
									likedCats={likedCats}
									setLikedCats={setLikedCats}
								/>
							</Gallery>
						}
					/>
					<Route
						path='*'
						element={<div className='not-found'>404 - Not Found &#9785;</div>}
					/>
				</Routes>
			</section>
		</>
	);
};

export default App;
