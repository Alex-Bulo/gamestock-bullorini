import { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.svg';
import './NavBar.css'

function NavBar(props) {
    const themeIcon = props.themeIcon
   
    return (
        <nav className="NavBar">
            <div className="NavBar-themeMode" onClick={props.themeHandler}><i className={`far ${themeIcon}`}></i></div>
            <img src={logo} className="NavBar-logo" alt="logo" />
            
            <ul className="NavBar-menu">
                
                { props.categories ?
                props.categories.map( (category,i) =>{
                    return <li key={i} className="NavBar-items"> <a href="#" className="NavBar-menuItems"> {category} </a></li>
                })
                :'Bienvenido/a'
                }
                                
                <li className="NavBar-items NavBar-login"> <i className="far fa-user"></i> Ingresar </li>

            </ul>




        </nav>
    );
}

export default NavBar
