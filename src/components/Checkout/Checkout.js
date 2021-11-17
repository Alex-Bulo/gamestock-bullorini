import { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Checkout.css'
import { getFirestore } from "../../firebase";
import { collection, addDoc, doc, updateDoc, increment } from "firebase/firestore";
import ConfirmPopUp from '../ConfirmPopUp/ConfirmPopUp';


function Checkout({close}) {  
    const {user, preference} = useAuth()
    const {cart, clearCart} = useCart()
  
    const [name, setName] = useState( user ? `${user.name} ${user.lastName}`: '')
    const [tel, setTel] = useState( (user && user.tel) ? `${user.tel}`: '')
    const [mail, setMail] = useState( (user && user.mail) ? `${user.mail}`: '')
    const [newOrder, setNewOrder] = useState(null)
    const [popUpBox, setPopUpBox] = useState(false)


    const nameInput = useRef(null)
    const telInput = useRef(null)
    const mailInput = useRef(null)
 
    const inputHandler = (e) =>{
        switch (e.target) {
            case nameInput.current:
                setName(e.target.value)
                break;
            
            case telInput.current:
                setTel(e.target.value)
                break;
            
            case mailInput.current:
                setMail(e.target.value)
                    
                break;
                
            default:
                break;
        }

    }
    const confirmHandler = (e) =>{
        e.preventDefault()
        setPopUpBox(true)
    }
    const closeHandler = () =>{
        if (newOrder){
            clearCart()
            close()
        }else{
            close()
        }
    }

    const buy = () =>{

        const items = cart.map( i => {
            return {
                id: i.id,
                qty: i.qty,
                price: i.price,
                title: i.title,
                category: i.category
            }
        })

        const order = {
            buyer: {name, phone: tel, email:mail},
            items,
            total: cart.reduce( (acum, item)=> acum + item.price*item.qty, 0 )
        }

        const db = getFirestore();

        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then( ({ id }) => setNewOrder(id) );

                
        cart.forEach( i => {    
            const productInBase = doc(db, "items", i.id);
            
            updateDoc(productInBase, { stock: increment( (-i.qty) )});

        })
    }


    return (
        <div className="bkg-Checkout">
        <form className={`Checkout ${preference.theme === 'light' ? 'dark': 'light'}`}>
            <i onClick={closeHandler} className="exitIcn far fa-times-circle"></i>
            {
                !newOrder &&
                <>
                    <h3>Confirma tus datos</h3>

                    <div className='inputContainer'>
                        <label>Nombre y Apellido</label>
                        <input ref={nameInput} type='text' value={name} onChange={(e) => inputHandler(e) }/>
                    </div>
                    <div className='inputContainer'>
                        <label>Teléfono</label>
                        <input ref={telInput} type='text' value={ tel } onChange={(e) => inputHandler(e) }/>
                    </div>
                    <div className='inputContainer'>
                        <label>Email</label>
                        <input ref={mailInput} type='email' value={ mail } onChange={(e) => inputHandler(e) }/>
                    </div>
                    
                    <button onClick={ (e) => confirmHandler(e) } className='addBtn'>Confirmar</button>
                    <ConfirmPopUp actionBtn={buy} box={{removeBox:popUpBox, setRemoveBox:setPopUpBox}} >
                        <p>Confirma <br/><span>la compra?</span></p>
                    </ConfirmPopUp>
                </>
            }
            {newOrder &&
                <>
                    <h3>Gracias por tu compra, {name}!</h3>

                    <div className='inputContainer'>
                        <p>Ya hemos procesado tu pedido bajo el numero de orden <span>{newOrder}</span></p>
                    </div>
                    <div style={{alignSelf:'center'}}>
                        Continua mirando más juegos...
                    </div>


                </>
            
            }

        </form>
        </div>
    );
}

export default Checkout