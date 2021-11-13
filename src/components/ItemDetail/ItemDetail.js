import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({item}) {
    const [added, setAdded] = useState(false)
    const pics = useRef(null)
    const {addItem} = useCart()

    function picsHandler (){
        pics.current.classList.toggle('morePics')
    }
    function notClose(e){

        e.stopPropagation()
    }
    function onAdd (qtyToAdd){

        const info = {
            ...item,
            qty: qtyToAdd
        }
    
        const success = addItem(info)
        success && setAdded(true)
    }

    return (
        <article className="ItemDetail">
            <header className="headerInfo">
                <h4 className="gameTitle">{item.title}</h4>
                <h5 className="gamePrice">USD ${item.price}</h5> 
            </header> 
            <section className="detailsContainer">
                <div className="imgContainer">
                    <img className='detailImg' src={item.pictureUrl} alt={`Foto Juego ${item.title}`} /> 
                    
                    <button onClick={picsHandler}>Más fotos</button>
                    
                    <div ref={pics} onClick={picsHandler} className="imagesContainer">
                        <div onClick={notClose} className="images">
                            
                            {item.images.map((img,i)=> 
                                    <img src={img} key={i} alt={`Extra fotos de ${item.title}`}/>
                            )}

                        </div>
                    </div>

                </div>

                <div className="infoContainer">
                    <div className='gameDBInfo'> 
                        <p style={{textTransform:'capitalize'}}>Plataforma: {item.category}</p>
                        <p>Stock: {item.stock}</p>
                    </div>
                <p className="gameDescription">{item.description}</p>
                { !added ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/> : <Link to='/cart' ><button className='addBtn'>Terminar Compra</button></Link>}

                </div>    


            </section>
            
        
        </article>
    )} 

export default ItemDetail