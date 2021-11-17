import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from "react-loader-spinner";
import { Redirect, useParams } from 'react-router';
import './ItemDetailContainer.css'
import { getFirestore } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";



function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect( () => {

        const db = getFirestore();

        const productInBase = doc(db, "items", id);

        getDoc(productInBase).then( snapshot => {
            if(snapshot.exists()) {
                setItem( snapshot.data() )
                setLoading(false)
            }else{
                setLoading(false)  
            }
        })
    
            
    },[id])

    return (
        <section className="ItemDetailContainer">

            {item && <ItemDetail item={item}/>}
            {loading && <Loader type='Rings' color='var(--accent-font-color)' height={80} width={80}/>}
            {(!item && !loading) && <Redirect to='/not-found'/>}
        </section>
    );
}

export default ItemDetailContainer
