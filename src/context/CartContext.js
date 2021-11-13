import {createContext, useContext, useEffect, useState} from 'react'

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState( [] )

    const [totalItems, setTotalItems] = useState(0)
    useEffect( ()=>{
        const newTotal = cart.reduce( (acum, item)=> acum + item.qty, 0 )

        setTotalItems(newTotal)

    }
        
        
        ,[cart])

    const addItem = (item) =>{

        let toReturn
        switch (isInCart(item)) {
            case 'differentItems':
                const newCart = [...cart, item] 

                setCart(newCart)
                toReturn = true

            break;
            
            case 'inCart':
            case 'differentQty':
                const filteredCart = cart.filter(i => i.id !== item.id)
                const sameItem = cart.filter(i=> i.id === item.id)

                const newQty = item.qty + sameItem[0].qty
                const newItem = {
                    ...item, 
                    qty: newQty > item.stock ? item.stock : newQty}
                
                const filteredNewCart = [...filteredCart, newItem]
                setCart(filteredNewCart)
                toReturn = true

                break;
            default:
                toReturn = false
                break;

        }
        

       

        return toReturn
        
    }

    const removeItem = (item) =>{

        const updatedCart = cart.filter ( e => e.id !== item )
        setCart(updatedCart)

        // const newTotal = cart.reduce( (acum, item)=> acum + item.qty, 0 )
        // setTotalItems(newTotal)
    
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

    const clearCart = () =>{
        setCart( [] )
        // setTotalItems(0)
    }

    return(

        <CartContext.Provider value={ {cart,totalItems, addItem, removeItem, isInCart, clearCart} }>
            {children}
        </CartContext.Provider>
    )

} 
