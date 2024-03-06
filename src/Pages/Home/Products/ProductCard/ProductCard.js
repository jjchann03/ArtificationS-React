import './productcard.css'
import { Link } from 'react-router-dom'

export default function ProductCard(props){
    return(
        <div className='product'>
            <div className='product-img'>
                <Link to={`/Shop/${props.category}`} className='products-link'><div className='product-cat'>{props.category}</div></Link>
            </div>
        </div>
    )
}