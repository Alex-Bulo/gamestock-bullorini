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
                    let info = null
                    const game = result.find (e => e.id === Number(id))
                    
                    
                    if(game){
                        info = game
                    }else{
                        info = 'Not Found'
                    } 
                    setItem(info)
                    setLoading(false)
                }
            )
        },[id])

    return (
        <section className="ItemDetailContainer">

            {loading && <Loader type='Rings' color='var(--accent-font-color)' height={80} width={80}/>}
            {item==='Not Found' ? <NotFoundContainer/> : item && <ItemDetail item={item}/>}

        </section>
    );
}

export default ItemDetailContainer
