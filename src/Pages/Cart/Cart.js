import { useEffect, useState } from "react";
import axios from "axios";
import './cart.css';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";


export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:8080/cart', { customerId: sessionStorage.getItem('userId') }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(response => {
            if (response.status === 200) {
                if (response.data.result.length > 0) {
                    setCartItems(response.data.result);
                }
            } else {
                console.log(response.status);
            }
        });
    }, []); // Removed cartItems from dependency array

    const handleQuantityChange = (item, value) => {
        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.productId === item.productId) {
                const newQuantity = cartItem.quantity + value;
                if (newQuantity > 0) {
                    console.log("entered here");
                    setTimeout(()=>{
                        axios.post('http://localhost:8080/cart_update',{
                            productId: cartItem.productId,
                            customerId: sessionStorage.getItem('userId'),
                            quantity: newQuantity
                        },{
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            }
                        }).then(response=>{
                            if(response.status===200){

                            }
                        })
                    },1000);
                    return { ...cartItem, quantity: newQuantity };
                }
            }
            return cartItem;
        });
        setCartItems(updatedCartItems);
    };

    const deleteCartItem=(item)=>{
        axios.post("http://localhost:8080/delete_cart_item",{
            customerId: sessionStorage.getItem('userId'),
            itemId:item._id 
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(response=>{
            if(response.status===200){
                navigate(0);
            }
        });
    }

    return (
        <div className="cart-container">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th>Frame</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item._id}>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>
                                <div className="quantity">
                                    <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                                </div>
                            </td>
                            <td>{item.size}</td>
                            <td>{item.frame}</td>
                            <td>{item.price * item.quantity}</td>
                            <td><RiDeleteBin6Fill onClick={() => deleteCartItem(item)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/Checkout"><button className="checkout-button">Proceed to Checkout</button></Link>
        </div>
    );
}
