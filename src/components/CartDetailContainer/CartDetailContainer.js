import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartDetail from '../CartDetail/CartDetail';
import ConfirmPopUp from '../ConfirmPopUp/ConfirmPopUp';
import './CartDetailContainer.css'

function CartDetailContainer({cart}) {  
    const [removeBox,setRemoveBox] = useState(false)  
    const {clearCart} = useCart()


    return (
        <section className="CartDetailContainer">
        <header className="cartTop">
            <div className="cartCount"><span>Cantidad de Productos: </span>{cart.reduce( (acum, item)=> acum + item.qty, 0 )}</div>
            <div className="cartPrice"><span>Precio Total: </span>USD {cart.reduce( (acum, item)=> acum + item.price*item.qty, 0 )}</div>
            <button className="removeBtn" onClick={()=>setRemoveBox(true)}>Vaciar Carrito</button>

            <ConfirmPopUp box={{removeBox,setRemoveBox}} actionBtn={clearCart}>
                        <p>Esta acción eliminará todos los items de<br/><span>tu carrito</span></p>
                    </ConfirmPopUp>

        </header>
            
        {cart.map((item,i) => <CartDetail key={`${item.id}-${i}`} item={item}/>)}

        </section>
    );
}

export default CartDetailContainer