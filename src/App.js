import { Routes, Route } from 'react-router-dom';

import ProductDetails from './components/ProductDetails/ProductDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/productdetails/:id' element={<ProductDetails />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
