import {Outlet} from 'react-router';
import './App.css';
import Layout from './layout/layout';

function App() {
	return (
		<>
			<Layout>
				<Outlet />
			</Layout>
		</>
	);
}

export default App;
