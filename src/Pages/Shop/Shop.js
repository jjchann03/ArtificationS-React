import { useEffect, useState } from 'react';
import './shop.css'
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import ShopCategory from './ShopCategory/ShopCategory';
import PopularShop from './PopularShop/PopularShop';

export default function Shop(){
    const[categories,setCategories] = useState([]);
    const[selectedCategory,setSelectedCategory] = useState(-1);
    // const categoriesRef = useRef();

    useEffect(()=>{
        axios.get('http://localhost:8080/shop').then(response=>{
            if(response.status===200){
                setCategories(response.data.result);
            }
        })
    },[]);

    const selectCategory = (index)=>{
        setSelectedCategory(index);
    }

    return(
        <div className='shop-container'>
            <div className='side-bar'>
                {
                    categories.map((array,index)=>{
                        // console.log(array.productType);
                        return<Link to={`/Shop/${array.productCatId}`} className='product-type-display'  key={index}>
                            <div className={`${selectedCategory===index?'active':''}`} id='product-type-div' onClick={()=>{selectCategory(index)}}>
                                {array.productType}                 
                            </div>
                            </Link>   
                    })
                }
            </div>  

            <div className='shop-body'>
                <Routes>
                    <Route path='/' element={<PopularShop/>}/>
                    {selectedCategory !== -1 && <Route path='/:productId' element={<ShopCategory name={categories[selectedCategory].productType} />} />}
                </Routes>               
            </div>
        </div>
    )
}