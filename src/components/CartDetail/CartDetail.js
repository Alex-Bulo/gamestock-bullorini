import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import ConfirmPopUp from '../ConfirmPopUp/ConfirmPopUp';
import ItemCount from '../ItemCount/ItemCount';
import './CartDetail.css'

function CartDetail({item}) {
    const [removeBox,setRemoveBox] = useState(false)
    const {addItem, removeItem} = useCart()

    function addToCartHandler (qtyToAdd){
        
        const info = {
            ...item,
            qty: qtyToAdd
        }
        
        addItem(info)
    }

    return (
        <article className="CartDetail">
            <div className="cart-imgContainer"><img src={item.pictureUrl} alt={`Foto de Portada de ${item.title}`}/></div>
            <div className="cartInfo">
                <h3 className="cartInfo-title">{item.title}</h3>
                <p className="cartInfo-detail"><span>Plataforma:</span> {item.category}</p>
                <p className="cartInfo-detail"><span>Stock Disponible:</span> {item.stock}</p>
                <br/>
                <p className="cartInfo-detail"><span>Cantidad Elegida:</span> {item.qty}</p>
                <p className="cartInfo-detail"><span>Precio Unitario:</span> USD {item.price}</p>
            </div>

            <div className="cart-buttons">

                <ItemCount initial={item.qty} stock={item.stock} onAdd={addToCartHandler}/>
                <button className="removeBtn" style={{marginTop:'5px'}} onClick={()=>setRemoveBox(true)}>Eliminar</button>

                    <ConfirmPopUp box={{removeBox,setRemoveBox}} actionBtn={()=>removeItem(item.id)}>
                        <p>Esta acción eliminará todos los items de<br/><span>{item.title}</span></p>
                    </ConfirmPopUp>
                
            </div>
        </article>
    );
}

export default CartDetail