import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loader from "react-loader-spinner";
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { getFirestore } from '../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";



function ItemListContainer({categories}) {
    const [products, setProducts] = useState(null)
    const [msg, setMsg] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect( () => {
        setProducts(null)
        setLoading(true)

        const db = getFirestore();
        let dinamicMsg
        let q

        const isInCategories = categories.find( category => category.key === id)

        if(id && isInCategories ){

            q = query(
                collection(db, "items"),
                where("category", "==", id)
            );
            dinamicMsg = "Nuestros juegos para " + id

        }else{
            q = query(
                collection(db, "items")
            );
            dinamicMsg = "Todos nuestros juegos"
        }
        
        getDocs(q).then( snapshot => {
        // console.log(snapshot.docs[0].id)
    
            setProducts(
                snapshot.docs.map( doc => {
                const productInBase = { ...doc.data(), id: doc.id };
                return productInBase;
                })
            )
            setMsg(dinamicMsg)
            setLoading(false)
        })

    },[id,categories])


    return (
        <section className="ItemListContainer">
            {products && 
                <>
                    {id && <h4 className="catTitle">{msg}</h4>}
                    <ItemList items={products}/>
                    
                </>
            }
            {loading && <Loader type='Rings' color='var(--accent-font-color)' height={80} width={80}/>}

        </section>
    );
}

export default ItemListContainer
