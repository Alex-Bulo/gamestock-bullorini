import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({item}) {
    const pics = useRef(null)
    const [qtyToCart, setQtyToCart] = useState(null)

    function picsHandler (){
        pics.current.classList.toggle('morePics')
    }
    function notClose(e){
        console.log(e.currentTarget);
        e.stopPropagation()
    }
    function onAdd (qtyToAdd){
        console.log(qtyToAdd);

        setQtyToCart(qtyToAdd)
    }
    console.log(qtyToCart);

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
                            {item.images.map((img,i)=>{
                                return(
                                    <img src={img} key={i} alt={`Extra fotos de ${item.title}`}/>
                                )
                            })}
                        </div>
                    </div>

                </div>

                <div className="infoContainer">
                <p className="gameDescription">{item.description}</p>
                { !qtyToCart ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/> : <Link to='/cart'><button className='addBtn'>Terminar Compra</button></Link>}

                </div>    


            </section>
            
        
        </article>
    )} 

export default ItemDetail