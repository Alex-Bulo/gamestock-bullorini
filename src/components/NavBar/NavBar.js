import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useAuth } from '../../context/AuthContext';
import CartWidget from '../CartWidget/CartWidget';
import LogIn from '../LogIn/LogIn';
import './NavBar.css'

function NavBar(props) {
    const themeIcon = props.themeIcon
    const [showLogIn, setShowLogIn] = useState(false)
    const {user} = useAuth()

    function logInHandler (e){
        setShowLogIn(!showLogIn)
    }

    return (
        <>
            <nav className="NavBar">
                <div className="NavBar-themeMode" >
                    <i onClick={props.themeHandler} className={`${themeIcon}`}></i>
                    <Link to="/"><img src={logo} className="NavBar-logo" alt="logo" /></Link>
                </div>
                
                <CartWidget/>

                <ul className="NavBar-menu">
                    
                    { props.categories ?
                    props.categories.map( (category,i) =>{
                        return <li key={i} className="NavBar-items"> <Link to={`/category/${category}`} className="NavBar-menuItems"> {category} </Link></li>
                    })
                    :'Bienvenido/a'
                    }

                    <li className="NavBar-items NavBar-login" onClick={logInHandler}> <i className="fas fa-user"></i> {user ? user.name:'Ingresar'} 
                            {!user && <LogIn view={showLogIn}/> }
                    </li>
                    


                </ul>

            </nav>
                <header className="App-header">
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
        </>

    );
}

export default NavBar
