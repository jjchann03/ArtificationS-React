import './home.css'
import Header from './Header/Header'
import Products from './Products/Products'
import About from './About/About'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home(){
    useEffect(()=>{
        const checkFirstTime = async () => {
            console.log(sessionStorage.getItem('firstTime'));
            if(sessionStorage.getItem('firstTime')==='1'){
                await toast("Logged In Successfully",{autoClose:2000});
                sessionStorage.setItem('firstTime',0);
            }
        };

        checkFirstTime();
    },[]);

    let slides = [
        {src: 'https://kotart.in/cdn/shop/products/Kotart-Modern-Wall-Art-Framed-Painting.jpg?v=1697549148'},
        {src: 'https://mymodernmet.com/wp/wp-content/uploads/2020/08/inspirational-landscape-wall-art-13.jpg'},
        {src: 'https://kotart.in/cdn/shop/products/Kotart-Modern-Wall-Art-Framed-Painting.jpg?v=1697549148'},
        {src: 'https://www.crafttrip.in/image/cache/catalog/landscape/landscape-painting-watercolor-nature-wall-art--1250x833.jpg'},
        {src: 'https://www.sowpeace.in/cdn/shop/products/chitran-nordic-rainy-day-hills-wall-artwall-paintingsowpeace-343020.jpg?v=1698856272'}
    ]

    return(
        <div className='Home'>
            <ToastContainer/>
            <Header />
            <Products />
            <About />
            <Gallery slides={slides}/>
            <Footer />
        </div>
    )
}