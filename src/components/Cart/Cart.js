import { useCart } from '../../context/CartContext';
import './Cart.css'

function Cart() {    
    const {cart} = useCart()
    
    return (
        <div className="Cart">
            Cart: {JSON.stringify(cart)}
        </div>
    );
}

export default Cart