import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css'
import logo from '../../assets/images/logo.svg';
import CartDetailContainer from '../CartDetailContainer/CartDetailContainer';

function Cart() {    
    const {cart} = useCart()
    
    return (
        <div className="Cart">
            
        { cart.length === 0 ?
            <section className="EmptyCart">
                <i className="fas fa-shopping-cart"></i>
                <article>Todavía no has agregado ningún producto a tu carrito</article>
                
                <Link className="redirect" to="/"><img src={logo} className="Cart-logo" alt="logo" />  Buscá tu próximo juego...</Link>
            </section>
                :
            <CartDetailContainer cart={cart}/>
        }


        </div>
    );
}

export default Cart