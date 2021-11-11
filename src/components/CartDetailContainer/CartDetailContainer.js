import CartDetail from '../CartDetail/CartDetail';
import './CartDetailContainer.css'

function CartDetailContainer({cart}) {    


    return (
        <section className="CartDetailContainer">
        <header className="cartTop">
            <div className="cartCount"><span>Cantidad de Productos: </span>{cart.reduce( (acum, item)=> acum + item.qty, 0 )}</div>
            <div className="cartPrice"><span>Precio Total: USD </span>{cart.reduce( (acum, item)=> acum + item.price*item.qty, 0 )}</div>
        </header>
            
        {cart.map((item,i) => <CartDetail key={`${item.id}-${i}`} item={item}/>)}

        </section>
    );
}

export default CartDetailContainer