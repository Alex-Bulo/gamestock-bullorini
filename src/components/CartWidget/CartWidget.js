import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartWidget.css'

function CartWidget() {
    const {totalItems} = useCart()
   
    return (
        <Link to='/cart'>
           
            <div className="CartWidget">

                <i className="fas fa-shopping-cart"></i>
                {totalItems > 0 && <p className='cartQty'>{totalItems}</p>}
            </div>

        </Link>
        
    );
}

export default CartWidget
