import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useAuth } from '../../context/AuthContext';
import CartWidget from '../CartWidget/CartWidget';
import LogIn from '../LogIn/LogIn';
import './NavBar.css'
import { getFirestore } from '../../firebase';
import { collection, query, getDocs } from "firebase/firestore";

function NavBar(props) {    
    const themeIcon = props.themeIcon
    const [showLogIn, setShowLogIn] = useState(false)
    const {user} = useAuth()


    function logInHandler (e){
        if(!user){
            e.preventDefault()
            setShowLogIn(!showLogIn)
        }
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
                        return <li key={i} className="NavBar-items"> <Link to={`/category/${category.key}`} className="NavBar-menuItems"> {category.name} </Link></li>
                    })
                    :'Bienvenido/a'
                    }

                    <li className="NavBar-items NavBar-login"><Link to='/profile' onClick={(e)=>logInHandler(e)}> <i className="loginIcn fas fa-user"></i> {user ? user.name:'Ingresar'} </Link>
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
