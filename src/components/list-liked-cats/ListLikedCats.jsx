import Card from '../card/Card';

const ListLikedCats = ({ likedCats, setLikedCats }) => (
	<ul className='gallery__list'>
		{likedCats.map((cat) => (
			<Card
				key={cat.id}
				cat={cat}
				likedCats={likedCats}
				setLikedCats={setLikedCats}
			/>
		))}
	</ul>
);

export default ListLikedCats;
