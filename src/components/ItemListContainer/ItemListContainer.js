import './ItemListContainer.css'

function ItemListContainer(props) {
    
    return (
        <section className="ItemListContainer">                    
                    <article>{props.greeting}</article>                                   
        </section>
    );
}

export default ItemListContainer
