import { Link } from 'react-router-dom';
import './Item.css'

function Item({item}) {
    
    return (
        <Link to={`/item/${item.id}`} className="Item">
            <h4>{item.title}</h4> 

            <img className='ItemImg' src={item.pictureUrl} alt={`Foto Juego ${item.title}`} /> 
            
            <button to={`/item/${item.id}`} className="btnItem"> Ver más</button>

            <h5 className="itemCategory">{item.category}</h5>
        </Link>
    );
}

export default Item