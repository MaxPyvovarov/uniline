import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes/Routes.tsx';
import {ThemeProvider} from './components/theme-provider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);
