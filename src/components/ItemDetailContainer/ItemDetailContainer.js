import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from "react-loader-spinner";
import {data} from '../../helpers/data'
import { useParams } from 'react-router';
import './ItemDetailContainer.css'
import NotFoundContainer from '../NotFoundContainer/NotFoundContainer';

function ItemDetailContainer(props) {
    const [item, setItem] = useState(null)
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
                    const info = result.find (e => e.id === Number(id))

                    setItems(info)
                    setLoading(false)
                }
            )
        },[id])

    return (
        <section className="ItemDetailContainer">

            {items ? <ItemDetail item={items}/> : <NotFoundContainer/>}

            {loading && <article>Cargando Info del Juego...</article>}

        </section>
    );
}

export default ItemDetailContainer
