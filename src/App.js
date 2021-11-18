import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFoundContainer from './components/NotFoundContainer/NotFoundContainer';
import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartContext'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useAuth } from './context/AuthContext';
import Profile from './components/Profile/Profile';
import { getFirestore } from './firebase';
import { collection, query, getDocs } from "firebase/firestore";
import Register from './components/Register/Register';

function App() {
      const [categories, setCategories] = useState(null)

      const {preference} = useAuth()
      const app = useRef(null)
  
      useEffect(()=>{
            const db = getFirestore();
            const q = query( 
                  collection(db, "categories")
              );
            
            getDocs(q).then( snapshot => {
            // console.log(snapshot.docs[0].id)
            
                  setCategories(
                        snapshot.docs.map( doc => {
                              const categoryInBase = { ...doc.data()};
                              return categoryInBase;
                        })
                  )
            })

      },[])
      

      const themeChange = () =>{
            const newTheme = preference.theme==='dark'?'light':'dark'
            preference.setTheme(newTheme)
      }    



    return (
  
      <div ref={app} className={`App ${preference.theme}`}>
          <CartProvider>
          <BrowserRouter>
            <NavBar 
                  categories={categories} 
                  themeIcon={preference.theme==='dark'?'fas fa-sun':'fas fa-moon'}
                  themeHandler={themeChange}
                  />
                

              <Switch>
                <Route exact path="/">
                      {categories && <ItemListContainer categories={categories}/>}
                </Route>

                <Route path="/category/:id">
                      {categories && <ItemListContainer categories ={categories}/>}
                </Route>
                
                <Route path="/item/:id">
                      <ItemDetailContainer/>
                </Route>
                <Route path="/cart">
                      <Cart/>
                </Route>
                <Route path="/profile">
                      <Profile/>
                </Route>
                <Route path="/register">
                      <Register/>
                </Route>
                <Route path="*">
                      <NotFoundContainer/>
                </Route>
              </Switch>


            </BrowserRouter>
            </CartProvider>
          </div>
            
  );
}

export default App;
