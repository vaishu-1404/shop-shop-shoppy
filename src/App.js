import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route,} from 'react-router-dom'
import Product from './modules/Product';
import Pro from './modules/Pro';
import CategoryProduct from './modules/CategoryProduct';
import Cart from './modules/Cart';
import About from './modules/Contact';
import Contact from './modules/Contact';

function App() {
  return (
    <div> 
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products/:id" element={<Product/>}/>
        <Route path="/products" element={<Pro/>}/>
        <Route path="/categories/:name" element={<CategoryProduct/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
