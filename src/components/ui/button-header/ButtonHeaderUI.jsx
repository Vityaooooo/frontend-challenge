const ButtonHeaderUI = ({children, onClick, isActiveButton}) => (
  <button 
    className={`menu__button ${isActiveButton ? 'menu__button_active' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ButtonHeaderUI;