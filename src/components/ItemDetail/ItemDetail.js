import { useRef } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({item}) {
    const pics = useRef(null)

    function picsHandler (){
        console.log(pics);
        pics.current.classList.toggle('morePics')
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
                        <div className="images">
                            {item.images.map((img,i)=>{
                                return(
                                    <img src={img} key={i}/>
                                )
                            })}
                        </div>
                    </div>

                </div>

                <div className="infoContainer">
                <p className="gameDescription">{item.description}</p>
                <ItemCount initial={1} stock={item.stock}/>    
                </div>    


            </section>
            
        
        </article>
    )} 

export default ItemDetail