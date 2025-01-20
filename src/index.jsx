import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/App';
import './styles/index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<BrowserRouter
			basename={process.env.PUBLIC_PATH || '/'}>
			<App />
		</BrowserRouter>
	</StrictMode>
);
