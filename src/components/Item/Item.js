import './Item.css'

function Item(props) {
    
    return (
        <article className="Item">
            <h4>{props.item.title}</h4> 
            <p>{props.item.description}</p>
            <img className='ItemImg' src={props.item.pictureUrl} alt={`Foto Juego ${props.item.title}`} /> 
        </article>
    );
}

export default Item