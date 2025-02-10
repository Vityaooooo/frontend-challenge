import { ReactComponent as LikeButtonSvg } from '../../../images/LikeButton.svg';

const CardUI = ({ cat, isLiked, isLoaded, onClick, onLoad }) => (
	<article className={`card ${isLoaded ? 'card--loaded' : ''}`}>
		<img className={`card__image ${isLoaded ? 'card_loaded' : ''}`} src={cat.url} alt='cat' onLoad={onLoad}/>
		<button
			className={`card__button ${isLiked ? 'card__button_active' : ''}`}
			onClick={onClick}>
			<LikeButtonSvg className='like-icon' />
		</button>
	</article>
);

export default CardUI;
