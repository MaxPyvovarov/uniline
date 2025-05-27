import App from '@/App';
import OverviewPage from '@/pages/OverviewPage/OverviewPage';
import SettingsPage from '@/pages/SettingsPage/SettingsPage';
import UsersPage from '@/pages/UsersPage/UsersPage';
import {createBrowserRouter} from 'react-router';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <OverviewPage />,
				handle: {title: 'Overview'},
			},
			{
				path: 'users',
				element: <UsersPage />,
				handle: {title: 'Users'},
			},
			{
				path: 'settings',
				element: <SettingsPage />,
				handle: {title: 'Settings'},
			},
		],
	},
]);
