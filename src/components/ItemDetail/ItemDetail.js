import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({item}) {
    
    return (
        <article className="ItemDetail">
            <header className="headerInfo">
                <h4 className="gameTitle">{item.title}</h4>
                <h5 className="gamePrice">{item.price}</h5> 
            </header> 
            <section className="detailsContainer">
                <div className="imgContainer">
                    <img className='detailImg' src={item.pictureUrl} alt={`Foto Juego ${item.title}`} /> 
                </div>

                <div className="infoContainer">
                <p className="gameDescription">{item.description}</p>
                
                <ItemCount initial={1} stock={item.stock}/>    
                </div>    


            </section>
            
        
        </article>
    )} 

export default ItemDetail