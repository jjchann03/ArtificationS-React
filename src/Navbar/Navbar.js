import './navbar.css'
import logo from './Artification Studios.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



export default function Navbar(){
    const [validUser,setValidUser] = useState(true);
    const [cartItems,setCartItems] = useState(0);
    useEffect(()=>{
        if(sessionStorage.getItem('userId')===null){
            setValidUser(false);
        }else{
            axios.post('http://localhost:8080/cart',{customerId:sessionStorage.getItem('userId')},{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
            }).then(response=>{
                if(response.status===200){
                    if(response.data.result.length>0){
                        sessionStorage.setItem('cart-items',response.data.result.length);
                        setCartItems(sessionStorage.getItem('cart-items'));
                    }
                }else{
                    console.log(response.status);
                }
            })
        }
    },[cartItems]);

    return(
        <div className='navbar'>
            <img alt='logo' src={logo} className='brand-logo'></img>
            <div className='nav-list'>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/shop" className='nav-link'>Shop</Link>
                <Link to="/aboutus" className='nav-link'>About Us</Link>
                <Link to="/contactus" className='nav-link'>Contact Us</Link>
                {(!validUser)?
                <Link to="/login" className='nav-link'>Login</Link>
                :
                <><Link to={`/profile/${sessionStorage.getItem('userId')}/info`} className='nav-link'><FaUserCircle fontSize={"1.5rem"}/></Link>
                 <Link className='nav-link cart-icon' to='/cart'>
                    <FaShoppingCart fontSize={"1.5rem"}/>
                    <div className='cart-item-no'>
                        {cartItems}
                    </div>
                </Link></>}
            </div>
        </div>
    )
}