import CardUI from '../ui/card/CardUI';

const Card = ({ cat, likedCats, setLikedCats }) => {
	const isLiked = likedCats.some((likedCat) => likedCat.id === cat.id);

	const onHandleToggleLike = () => {
		setLikedCats((prevState) => {
			if (prevState.some((likedCat) => likedCat.id === cat.id)) {
				return prevState.filter((likedCat) => likedCat.id !== cat.id);
			} else {
				return [...prevState, cat];
			}
		});
	};

	return <CardUI cat={cat} isLiked={isLiked} onClick={onHandleToggleLike} />;
};

export default Card;
