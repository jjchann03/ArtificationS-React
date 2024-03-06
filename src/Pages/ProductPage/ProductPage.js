import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ImHome3 } from "react-icons/im";
import './productpage.css'

export default function ProductPage(){
    const navigate = useNavigate();
    let params = useParams();
    // const [order,setOrder] = useState([]);
    const [item,setItem] = useState([]);
    const [imgSlide,setImgSlide] = useState([]);
    const [imgIndex,setImgIndex] = useState(0);
    const [sizeValue,setSizeValue] = useState('');
    const [frameValue,setFrameValue] = useState('Yes');

    useEffect(()=>{
        axios.post('http://localhost:8080/product_page',params,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(response=>{
            if(response.status===200){
                setItem(response.data.result[0]);
                setImgSlide(response.data.result[0].productImg);
                setSizeValue(response.data.result[0].minSizeL);
            }
        })
    },[params,item,imgSlide])

    const newIndex=(index)=>{
        setImgIndex(index);
    }

    const bigStyle={
        backgroundImage: `url(${process.env.PUBLIC_URL+'/Images/'+imgSlide[imgIndex]})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }
    const smallStyle={
        minWidth: '50px',
        minHeight: '50px',
        backgroundImage: `url(${process.env.PUBLIC_URL+'/Images/'+imgSlide[imgIndex]})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }

    const addToCart = (item,size,frame)=>{
        const s = size+"X"+((size/item.sizeRatioL)*item.sizeRatioB); 
        let data = {
            productId: params.productId,
            productName: item.productName,
            price: item.productPrice,
            quantity: 1,
            size: s,
            frame: frame,
            customerId: sessionStorage.getItem('userId')
        }
        axios.post('http://localhost:8080/add_to_cart',data,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(response=>{
            if(response.status===200){
                navigate(0);
            }
        })

    }

    return(
        <div className="product-page-body">
            <div className="path-bar">
                <span><ImHome3 /></span>
                <span> {'>'} </span>
                <span>Shop</span>
                <span> {'>'} </span>
                <span>{params.productType}</span>
                <span> {'>'} </span>
                <span>{item.productName}</span>
            </div>

            <div className="productpage-product-container">
                <div className="productpage-img-carousel">
                    <div className="productpage-big-img" style={bigStyle}>
                        
                    </div>
                    <div className="productpage-small-img-container">
                        {
                            imgSlide.map((img,index)=>{
                                return <div key={index} style={smallStyle} onClick={()=>{newIndex(index)}} className="productpage-small-img"></div>
                            })
                        }
                    </div>
                </div>

                <div className="productpage-details">
                    <h1 id="productpage-product-name">{item.productName}</h1>
                    <div id="productpage-product-price">{item.productPrice}</div>
                    <div id="productpage-product-desc">{item.productDescription}</div>
                    <div className="productpage-select-size">
                        <p>Size: </p>
                        <select value={sizeValue} onChange={(e)=>{setSizeValue(e.target.value)}}>
                            <option value={item.minsizeL}>{item.minSizeL} X {item.minSizeB} inch</option>
                            <option value={(item.minSizeL)*2}>{parseInt(item.minSizeL)*2} X {parseInt(item.minSizeB)*2} inch</option>
                            <option value={(item.minSizeL)*4}>{parseInt(item.minSizeL)*4} X {parseInt(item.minSizeB)*4} inch</option>
                        </select>
                    </div>
                    <div className="productpage-select-size">
                        <p>Frame: </p>
                        <select value={frameValue} onChange={(e)=>{setFrameValue(e.target.value)}}>
                            <option value={String("yes")}>Yes</option>
                            <option value={String("no")}>No</option>
                        </select>
                    </div>
                    <div id="common-points">
                        <ul>
                            <li>Paper: USed is this</li>
                            <li>3 Sizes available</li>
                            <li>Shipping Charges will be covered extra.</li>
                            <li>NOTE: Without frame the product will be provided as a rolled canvas paper.</li>
                            <li>These images are under the copyright of Artification Studios</li>
                        </ul>
                    </div>
                    <button id="productpage-add-to-cart" onClick={()=>addToCart(item,sizeValue,frameValue)}>Add to Cart</button>
                </div>
            </div>

            <div className="product-reviews-Container">

            </div>
        </div>
    )
}