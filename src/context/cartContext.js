import {createContext, useContext, useState} from 'react'

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState( [{id:'a'},{id:'b'}] )

    const addItem = (item) =>{
        if (!isInCart(item.id)){
            setCart( [...cart, item] ) 
            return true
        }else{
            return false
        }
        
    }

    const removeItem = (item) =>{
        const updatedCart = cart.filter ( e => e.id !== item.id )
        setCart(updatedCart)
    }

    const isInCart = (id) =>{
        const filteredCart = cart.filter(item => item.id === id)
        console.log(filteredCart);
        const isIn = filteredCart.length === 0 ? false : true
        console.log(isIn); 

        return isIn
    }

    const clear = () =>{
        setCart( [] )
    }

    return(

        <CartContext.Provider value={ {cart, addItem, removeItem, isInCart, clear} }>
            {children}
        </CartContext.Provider>
    )

} 