import logo from './assets/images/logo.svg';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { useEffect, useRef, useState } from 'react';



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
    const newTheme = theme=='dark'?'light':'dark'
    setTheme(newTheme)
  }    
    

    return (
    <div ref={app} className={`App ${theme}`}>
      
      <NavBar 
            categories={['Acción', 'Deportes', 'Carreras']} 
            themeIcon={theme=='dark'?'fa-sun':'fa-moon'}
            themeHandler={themeChange}
      />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GameStock: Videojuegos a tu alcance
        </p>
        <a
          className="App-link"
          href="https://github.com/Alex-Bulo/gamestock-bullorini.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Repo
        </a>
      </header>
    </div>
  );
}

export default App;
