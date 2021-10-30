import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import {data,categories} from '../../helpers/data'

function ItemListContainer(props) {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()


    useEffect( () => {
        const getProducts = new Promise ((resolve)=>{
            setTimeout( ()=> {
                resolve(data)
            },3000)
        })

        getProducts
            .then((result)=>{
                    let info = result
                    if(id && categories.indexOf(id)>=0 ){
                        info = result.filter(e => e.category === id)
                    }  
                    setProducts(info)
                    setLoading(false)
                }
            )
        },[id])


    return (
        <section className="ItemListContainer">
            {products && 
                <>
                    {props.greeting && <h4 className="catTitle">{props.greeting}</h4>}
                    {id && <h4 className="catTitle">Juegos para {id}</h4>}
                    <ItemList items={products}/>
                    
                </>
            }
            {loading && <article>Cargando...</article>}

        </section>
    );
}

export default ItemListContainer
