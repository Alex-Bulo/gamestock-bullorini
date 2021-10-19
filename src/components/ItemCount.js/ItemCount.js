import './ItemCount.css'
import { useState } from 'react';

function ItemCount({stock,initial}) {
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
            <section className="countHeader">
                <h4>Fifa 22</h4>
                <p>PS4</p>
            </section>

            <section className="countSection">
                
                <div className="countButtons">
                    <button onClick={decrease}>-</button>
                    <input readOnly value={counter}/>
                    <button onClick={increase}>+</button>
                </div>
                
                <button className="addBtn">Agregar al Carrito</button>            
            
            </section>
        </div>
    );
}

export default ItemCount