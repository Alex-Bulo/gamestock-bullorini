import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartWidget.css'

function CartWidget() {
    const {cart} = useCart()
   
    return (
        <Link to='/cart'>
           
            <div className="CartWidget">
                {/* deberia ser el Cart outline (no solido), pero es pago. No encontré */}
                <i className="fas fa-shopping-cart"></i>
                {cart.length > 0 && <p className='cartQty'>{cart.reduce( (acum, item)=> acum + item.qty, 0 )}</p>}
            </div>

        </Link>
        
    );
}

export default CartWidget
