import { useEffect, useState } from "react"
import ShopProduct from "../ShopCategory/ShopProduct/ShopProduct";
import axios from "axios";

export default function PopularShop(){
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/popular_products").then(response=>{
            if(response.status===200){
                setData(response.data.result);
            }
        })
    },[]);
    
    return(
        <div className="shop-product-container">
            <h3 id="shop-product-heading">Popular Products</h3>
            <div id="shop-product-display">
            {
                data.map((array,index)=>{
                    return <ShopProduct data={array} key={index}/>
                })
            }
            </div>
        </div>
    )
}