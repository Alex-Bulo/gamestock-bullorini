import './ItemList.css'
import Item from '../Item/Item';

function ItemList(props) {
    
    return (
        <div className="ItemList">
            {props.items.map( product => <Item item={product} key={product.id} />)}    
        
        </div>
    );
}

export default ItemList