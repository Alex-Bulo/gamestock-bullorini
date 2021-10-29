import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

import './ItemDetailContainer.css'

function ItemDetailContainer(props) {
    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)

    const data = [
        {id:1, title:'Fifa 22', description:'Juego de Futbol de EA Sports', price:'USD $90', pictureUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzKyUl42E-B41unBq5iVBDJLAWDoUID-A1uCHwa_5rmfs_1cPbJIMbb3993m9eHHnUA4&usqp=CAU', stock:5},
        {id:2, title:'Virtua Tennis', description:'Virtua Tennis World Tour para PS4', price:'USD $60', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_616913-MLA41272666365_032020-V.jpg', stock:7},
        {id:3, title:'NBA 2K21', description:'Juego de NBA para PS4', price:'USD $70', pictureUrl:'https://metajuego1.com/assets/uploads/product_hMf4KJ5UjqRF3k8Q1xwC.jpg', stock:11}]



    useEffect( () => {
        const getItems = 
            new Promise ((resolve)=>{
                setTimeout( ()=> {
                    resolve(data.find (e => e.id === props.gameID) )
                },2000)
            })

        getItems
            .then((result)=>{
                    setItems(result)
                    setLoading(false)
                }
            )
        },[])





    return (
        <section className="ItemDetailContainer">

            {items && 
                <>
                    <ItemDetail item={items}/>
                </>
            }
            {loading && <article>loading</article>}

        </section>
    );
}

export default ItemDetailContainer
