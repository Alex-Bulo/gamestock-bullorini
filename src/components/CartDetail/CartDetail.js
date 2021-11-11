import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './CartDetail.css'

function CartDetail({item}) {
    const [selfQty, setSelfQty] = useState(item.qty)    
    const {addItem} = useCart()

    function addToCartHandler (qtyToAdd){
        setSelfQty(qtyToAdd)

        const info = {
            ...item,
            qty: qtyToAdd
        }
        
        addItem(info)
    }

    return (
        <article className="CartDetail">
            <div className="cart-imgContainer"><img src={item.pictureUrl}/></div>
            <div className="cartInfo">
                <h3 className="cartInfo-title">{item.title}</h3>
                <p className="cartInfo-detail"><span>Plataforma:</span> {item.category}</p>
                <p className="cartInfo-detail"><span>Primera entrega:</span> {item.released}</p>
                <br/>
                <p className="cartInfo-detail"><span>Cantidad elegida:</span> {selfQty}</p>
                <p className="cartInfo-detail"><span>Cantidad elegida:</span> USD {item.price}</p>
            </div>
            <div className="cart-buttons">
                <button className="removeAll">Eliminar todos los items de este Juego</button>
                <ItemCount initial={item.qty} stock={item.stock} onAdd={addToCartHandler}/>
                
            </div>
        </article>
    );
}

export default CartDetail