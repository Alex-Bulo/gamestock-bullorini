import { useEffect, useState } from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer(props) {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const data = [
        {id:1, title:'Fifa 22', description:'Juego de Futbol de EA Sports', price:'USD $90', pictureUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzKyUl42E-B41unBq5iVBDJLAWDoUID-A1uCHwa_5rmfs_1cPbJIMbb3993m9eHHnUA4&usqp=CAU'},
        {id:2, title:'Virtua Tennis', description:'Virtua Tennis World Tour para PS4', price:'USD $60', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_616913-MLA41272666365_032020-V.jpg'},
        {id:3, title:'NBA 2K21', description:'Juego de NBA para PS4', price:'USD $70', pictureUrl:'https://metajuego1.com/assets/uploads/product_hMf4KJ5UjqRF3k8Q1xwC.jpg'}]


    useEffect( () => {
        const getProducts = new Promise ((resolve)=>{
            setTimeout( ()=> {
                resolve(data)
            },3000)
        })

        getProducts
            .then((result)=>{
                    setProducts(result)
                    setLoading(false)
                }
            )
        },[])





    return (
        <section className="ItemListContainer">

            {products && 
                <>
                    {/* <ItemList items={products}/> */}
                    <ItemDetailContainer gameID={1}/>
                </>
            }
            {loading && <article>{props.greeting}</article>}

        </section>
    );
}

export default ItemListContainer
