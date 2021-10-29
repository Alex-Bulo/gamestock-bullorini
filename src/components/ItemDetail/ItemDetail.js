import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({item}) {
    
    return (
        <article className="ItemDetail">
            <header>
                <h4 className="gameTitle">{item.title}</h4>
                <h5 className="gameDescription">{item.description}</h5>
            </header> 
            
            <img className='detailImg' src={item.pictureUrl} alt={`Foto Juego ${item.title}`} /> 
            <p className="gamePrice">{item.price}</p> 

            <ItemCount initial={1} stock={item.stock}/>    
        
        </article>
    )} 

export default ItemDetail