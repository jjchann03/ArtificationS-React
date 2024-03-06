import './products.css'
import ProductCard from './ProductCard/ProductCard'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useEffect, useState } from 'react';
import axios from 'axios';


const Products=()=>{
    const [productCat, setProductCat] = useState([]);
    const [box,setBox] = useState(null);
    useEffect(()=>{
        setBox(document.querySelector(".product-slider")); 
        axios.get('http://localhost:8080/shop').then(response=>{
            if(response.status===200){
                setProductCat(response.data.result);
            }
        })
    },[box,productCat]);
    
    let goToNext=(e)=>{
        setBox(box+400); 
    }
    let goToPrev=(e)=>{
        setBox(box-400); 
    }

    if(productCat.length===0){
        return;
    }

    return(
        <div className='products-container'>
            <h2>Our Products</h2>

            <div className='product-slider'>
                {
                    productCat.map((array,index)=>{
                        return <ProductCard category={array.productType} key={index}/>
                    })
                }
            </div>
            
            <GrPrevious className='product-prev' fontWeight={700} onClick={goToPrev} />
            <GrNext className='product-next' onClick={goToNext}/>
        </div>
    )
}

export default Products;