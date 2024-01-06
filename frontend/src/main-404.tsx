import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import NotFound from './pages/404';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<NotFound />
	</StrictMode>
);
