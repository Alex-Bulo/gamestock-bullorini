import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { categories } from './helpers/data';
import NotFoundContainer from './components/NotFoundContainer/NotFoundContainer';



function App() {
  //seteo estado de colorTheme por defecto = light
  const [theme, setTheme] = useState('light')

  //en el primer render chequea si el usuario tiene preferencia de colorTheme, y cambia el estado theme
  useEffect( ()=>{
  const prefersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
    setTheme(prefersTheme)
},[])

  const app = useRef(null)
//funcion que permite cambiar el colorTheme al usuario (se pasa al hijo, NavBar)
  const themeChange = () =>{
    const newTheme = theme==='dark'?'light':'dark'
    setTheme(newTheme)
  }    
    
  const greeting = 'Todos nuestros juegos'



    return (
    <div ref={app} className={`App ${theme}`}>
      
      <BrowserRouter>
      <NavBar 
            categories={categories} 
            themeIcon={theme==='dark'?'fas fa-sun':'fas fa-moon'}
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

            <Route path="*">
                  <NotFoundContainer/>
            </Route>
          </Switch>


        </BrowserRouter>
    </div>
  );
}

export default App;
