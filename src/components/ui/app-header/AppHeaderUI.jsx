import ButtonHeader from '../../button-header/ButtonHeader';

const AppHeaderUI = ({ locationPath }) => (
	<header className='header'>
		<nav className='menu'>
			<ul>
				<ButtonHeader path='/' isActiveButton={locationPath === '/'}>
					Все котики
				</ButtonHeader>
				<ButtonHeader path='/liked' isActiveButton={locationPath === '/liked'}>
					Любимые котики
				</ButtonHeader>
			</ul>
		</nav>
	</header>
);

export default AppHeaderUI;
