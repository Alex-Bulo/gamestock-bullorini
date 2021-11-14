import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { categories } from './helpers/data';
import NotFoundContainer from './components/NotFoundContainer/NotFoundContainer';
import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartContext'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useAuth } from './context/AuthContext';
import Profile from './components/Profile/Profile';


function App() {
  const {preference} = useAuth()
  

  const app = useRef(null)

  const themeChange = () =>{
    const newTheme = preference.theme==='dark'?'light':'dark'
    preference.setTheme(newTheme)
  }    
    
  const greeting = 'Todos nuestros juegos'



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
                      <ItemListContainer greeting={greeting}/>
                </Route>

                <Route path="/category/:id">
                      <ItemListContainer/>
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
