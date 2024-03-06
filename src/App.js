import './App.css';
import Navbar from './Navbar/Navbar';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Profile from './Pages/Profile/Profile';
import Cart from './Pages/Cart/Cart';
import ProductPage from './Pages/ProductPage/ProductPage';
import Checkout from './Pages/Checkout/Checkout';


// {
//   headers: {
//       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//   }
// }

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes className='pages'>
        <Route path='/' element={<Home />}/>
        <Route path='/shop/*' element={<Shop />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile/*' element={<Profile />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/shop/:productType/:productId' element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
