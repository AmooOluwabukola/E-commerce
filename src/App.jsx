import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { CartProvider } from '../src/components/shop/CartContext'; // Import CartProvider
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Product from './pages/Product';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import Login from './pages/Login';
import Signup from './pages/auth/Signup';
import UserProfile from '../src/pages/UserProfile';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import ProductDetail from './pages/Productdetail';


function AppContent() {
    const location = useLocation();
    const hideNavbarPaths = ['/login', '/signup', '/forgotpassword', '/resetpassword/:token'];

    const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

    return (
        <>
            {shouldShowNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product" element={<Product />} />
                <Route path="/productdetail/:id" element={<ProductDetail />} />
                <Route path="/order" element={<Order />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/forgotpassword" element={<Forgotpassword />} />
                <Route path="/reset-password/:token" element={<Resetpassword />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <CartProvider>
            <Router>
                <AppContent />
            </Router>
        </CartProvider>
    );
}

export default App;