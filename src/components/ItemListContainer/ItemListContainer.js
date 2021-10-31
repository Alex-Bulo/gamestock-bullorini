import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import {data,categories} from '../../helpers/data'

function ItemListContainer(props) {
    const [products, setProducts] = useState(null)
    const [msg, setMsg] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()


    useEffect( () => {
        setProducts(null)
        setLoading(true)
        const getProducts = new Promise ((resolve)=>{
            setTimeout( ()=> {
                resolve(data)
            },3000)
        })

        getProducts
            .then((result)=>{
                
                    if(id && categories.indexOf(id)>=0 ){
                        const info = result.filter(e => e.category === id)
                        setMsg("Nuestros juegos para " + id)
                        setProducts(info)
                    }else{
                        setMsg("Todos nuestros juegos")
                        setProducts(result)
                        
                    }  

                    setLoading(false)
                }
            )
        },[id])


    return (
        <section className="ItemListContainer">
            {products && 
                <>
                    {props.greeting && <h4 className="catTitle">{props.greeting}</h4>}
                    {id && <h4 className="catTitle">{msg}</h4>}
                    <ItemList items={products}/>
                    
                </>
            }
            {loading && <article>Cargando...</article>}

        </section>
    );
}

export default ItemListContainer
