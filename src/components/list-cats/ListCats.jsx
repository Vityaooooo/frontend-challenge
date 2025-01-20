import Card from '../card/Card';

const ListCats = ({allCats, likedCats, setLikedCats}) => (
    <ul className="gallery__list">
      {allCats.map(cat => (
        <Card
          cat={cat} 
          likedCats={likedCats}
          setLikedCats={setLikedCats}
        />
      ))}
    </ul>
)

export default ListCats;