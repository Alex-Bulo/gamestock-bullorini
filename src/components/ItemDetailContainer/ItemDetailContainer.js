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

                    setItem(info)
                    setLoading(false)
                }
            )
        },[id])

    return (
        <section className="ItemDetailContainer">

            {item ? <ItemDetail item={item}/> : <NotFoundContainer/>}

            {loading && <Loader type='Rings' color='var(--accent-font-color)' height={80} width={80}/>}

        </section>
    );
}

export default ItemDetailContainer
