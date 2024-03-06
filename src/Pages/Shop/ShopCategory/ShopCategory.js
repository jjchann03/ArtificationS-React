import { useParams } from 'react-router-dom'
import axios from 'axios';
import ShopProduct from './ShopProduct/ShopProduct'
import { useEffect, useState } from 'react';


export default function ShopCategory(props){
    const[products,setProducts] = useState([])
    let productId = useParams();
    
    useEffect(()=>{       
        axios.post('http://localhost:8080/shop_items',productId,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
        }).then(response=>{
            if(response.status===200){
                setProducts(response.data.result);
            }
        });
    },[productId]);

    return(
        <div className='shop-product-container'>
            <h3 id='shop-product-heading'>{props.name}</h3>
            <div id='shop-product-display'>
            {
                products.map((array,index)=>{
                    return <ShopProduct data={array} key={index}/>
                })
            }
            </div>
        </div>
    )
}