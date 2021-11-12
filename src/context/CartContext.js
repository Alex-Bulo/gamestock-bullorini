import {createContext, useContext, useState} from 'react'

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState( [] )

    const addItem = (item) =>{
        const filteredCart = cart.filter(i => i.id !== item.id)
        
        let toReturn
        switch (isInCart(item)) {
            case 'differentItems':

            setCart([...cart, item])
                toReturn = true

                break;

            case 'inCart':
            case 'differentQty':
                const sameItem = cart.filter(i=> i.id === item.id)
                const newQty = item.qty + sameItem[0].qty
                const newItem = {
                    ...item, 
                    qty: newQty > item.stock ? item.stock : newQty}
                
                
                setCart([...filteredCart, newItem])
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
            console.log('hiii');
            return needsUpdate
        }
        console.log('ll');
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
