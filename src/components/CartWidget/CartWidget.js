import { Link } from 'react-router-dom';
import './CartWidget.css'

function CartWidget() {
   
    return (
        <Link to='/cart'>
           
            <div className="CartWidget">
                {/* deberia ser el Cart outline (no solido), pero es pago. No encontré */}
                <i className="fas fa-shopping-cart"></i>
                <p className='cartQty'>0</p>
            </div>

        </Link>
        
    );
}

export default CartWidget
