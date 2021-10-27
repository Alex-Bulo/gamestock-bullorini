import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({item}) {
    
    return (
        <article className="ItemDetail">
            <header>
                <h4>{item.title}</h4>
                <h5>{item.price}</h5> 
            </header> 
            
            <img className='detailImg' src={item.pictureUrl} alt={`Foto Juego ${item.title}`} /> 
            <p>{item.description}</p>

            <ItemCount initial={1} stock={item.stock}/>    
        
        </article>
    )} 

export default ItemDetail