import './ItemCount.css'
import { useState } from 'react';

function ItemCount({stock,initial,onAdd}) {
    const [counter, setCounter] = useState(initial || 0)
    

    const increase = ()=>{
        const limit = stock || 10

        const newCounter = counter + 1 > limit ? counter : counter + 1
        setCounter(newCounter )
    }
    const decrease = ()=>{
        const newCounter = counter === 0 ? counter : counter - 1
        setCounter( newCounter )
    }

    return (
        <div className="ItemCount">
            <section className="countSection">
                
                <div className="countButtons">
                    <button onClick={decrease}>-</button>
                    <input readOnly value={counter}/>
                    <button onClick={increase}>+</button>
                </div>
                
                <button className="addBtn" onClick={()=>onAdd(counter)}>Agregar al Carrito</button>            
            
            </section>
        </div>
    );
}

export default ItemCount