import {createContext, useContext, useState} from 'react'

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState( [] )

    const addItem = (item) =>{
        let toReturn
        switch (isInCart(item)) {
            case 'differentQty':
                const filteredCart = cart.filter(i => i.id !== item.id)
                setCart([...filteredCart, item])
                toReturn = true
                
                break;

            case 'differentItems':
                setCart([...cart, item])
                toReturn = true

                break;

            default:
                toReturn = false
                break;

        }
        return toReturn
        
    }

    const removeItem = (item) =>{
        const updatedCart = cart.filter ( e => e.id !== item.id )
        setCart(updatedCart)
    }

    const isInCart = (item) =>{
        const isId = cart.some(i => i.id === item.id)
        const isQty = cart.some(i => i.id===item.id && i.qty===item.qty)

// id = true -> qty=true   : true
// id = false -> qty=false  : false
// id = true -> qty=false  : false

        if( !(isId && isQty) ){
            const needsUpdate = isId ? 'differentQty' : 'differentItems'
       
            return needsUpdate
        }
        return 'inCart'

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
