import ButtonHeaderUI from '../ui/button-header/ButtonHeaderUI';
import { useNavigate } from 'react-router-dom';

const ButtonHeader = ({ children, path, isActiveButton }) => {
	const navigate = useNavigate();

	const onHandleClick = () => {
		navigate(path);
	};

	return (
		<ButtonHeaderUI onClick={onHandleClick} isActiveButton={isActiveButton}>
			{children}
		</ButtonHeaderUI>
	);
};

export default ButtonHeader;
