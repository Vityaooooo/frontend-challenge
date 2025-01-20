import CardUI from '../ui/card/CardUI';
import { useState } from 'react';

const Card = ({ cat, likedCats, setLikedCats }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const isLiked = likedCats.some((likedCat) => likedCat.id === cat.id);

	const onHandleImageLoad = () => {
		setIsLoaded(true);
	};

	const onHandleToggleLike = () => {
		setLikedCats((prevState) => {
			if (prevState.some((likedCat) => likedCat.id === cat.id)) {
				return prevState.filter((likedCat) => likedCat.id !== cat.id);
			} else {
				return [...prevState, cat];
			}
		});
	};

	return (
		<CardUI
			cat={cat}
			isLiked={isLiked}
			isLoaded={isLoaded}
			onClick={onHandleToggleLike}
			onLoad={onHandleImageLoad}
		/>
	);
};

export default Card;
