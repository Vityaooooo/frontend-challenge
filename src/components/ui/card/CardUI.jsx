// Think how better toggle class
import { ReactComponent as LikeButtonSvg } from '../../../images/LikeButton.svg';

const CardUI = ({ cat, isLiked, onClick }) => (
	<article className='card'>
		<img className='card__image' src={cat.url} alt='cat' />
		<button
			className={`card__button ${isLiked ? 'card__button_active' : ''}`}
			onClick={onClick}>
			<LikeButtonSvg className='like-icon'/>
		</button>
	</article>
);

export default CardUI;
