// Think how better toggle class
const CardUI = ({cat, isLiked, onClick}) => (
  <article className="card">
    <img className="card__image" src={cat.url} alt="cat"/>
      <button className={`card__button ${isLiked ? 'card__button_active' : ''}`} onClick={onClick}>
        <svg className="like-icon" width="40" height="37" viewBox="0 0 40 37" fill="#000" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z" fill="#F24E1E"/>
        </svg>
      </button>
  </article>
)

export default CardUI;