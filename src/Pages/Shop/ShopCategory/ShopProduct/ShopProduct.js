// import { useState } from 'react'
import { Link } from 'react-router-dom';
import './shopproduct.css'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


export default function ShopProduct(props){
    const productId = props.data._id;
    const productCatId = props.data.productCatId;

    const style={
        backgroundImage: `url(${process.env.PUBLIC_URL+'/Images/'+props.data.productImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return(
        <div className='shop-product'>
            <div id='shop-product-img' style={style}></div>
            <h3 id='shop-product-name'>{props.data.productName}</h3>
            <p id='shop-product-price'>{props.data.productPrice}</p>
            <p id='shop-product-desc'><Link to={`/Shop/${productCatId}/${productId}`} id='product-desc-link'>{props.data.productDescription}</Link></p>
            <Link to={`/Shop/${productCatId}/${productId}`} id='product-btn-link'>
            <button>
                Buy Now
            </button>
            </Link>
        </div>
    )
}