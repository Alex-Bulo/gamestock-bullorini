import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {data} from '../../helpers/data'
import { useParams } from 'react-router';
import './ItemDetailContainer.css'

function ItemDetailContainer(props) {
    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect( () => {
        const getItems = 
            new Promise ((resolve)=>{
                setTimeout( ()=> {
                    resolve(data)
                },2000)
            })

        getItems
            .then((result)=>{
                    let info = null
                    const game = result.find (e => e.id === Number(id))
                    
                    if(game){
                        info = game
                    } 

                    setItems(info)
                    setLoading(false)
                }
            )
        },[id])

    return (
        <section className="ItemDetailContainer">

            {items && 
                <>
                    <ItemDetail item={items}/>
                </>
            }
            {loading && <article>Cargando Info del Juego...</article>}

        </section>
    );
}

export default ItemDetailContainer
