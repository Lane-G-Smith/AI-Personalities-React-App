import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<NextUIProvider>
			<App />
		</NextUIProvider>
	</StrictMode>
);
