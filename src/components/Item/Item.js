import { Link } from 'react-router-dom';
import './Item.css'

function Item({item}) {
    
    return (
        <article className="Item">
            <h4>{item.title}</h4> 

            <img className='ItemImg' src={item.pictureUrl} alt={`Foto Juego ${item.title}`} /> 
            
            <Link to={`/item/${item.id}`} className="btnItem"> Ver más</Link>
        </article>
    );
}

export default Item