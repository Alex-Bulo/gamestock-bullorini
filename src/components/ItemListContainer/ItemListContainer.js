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
  
        let q 

        const isInCategories = categories.find( category => category.key === id)
        const hasInIdAndInCategories = id && isInCategories
        const dinamicMsg = hasInIdAndInCategories ? "Nuestros juegos para " + id : "Todos nuestros juegos"

        // Corrección clase Workshop, no funciona :( 'Cannot read properties of undefined (reading '_apply')'
        // q = query(
        //     collection(db, "items"),
        //     hasInIdAndInCategories ? where("category", "==", id) : undefined
        // );
        
        if(hasInIdAndInCategories){
            q = query(
                collection(db, "items"),
                where("category", "==", id)
            );
        }else{
            q = query(
                collection(db, "items")
            )
        }

        
        getDocs(q).then( snapshot => {
    
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
