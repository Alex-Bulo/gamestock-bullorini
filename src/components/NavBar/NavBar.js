import { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.svg';
import './NavBar.css'

function NavBar(props) {
    const themeIcon = useRef(null)
   
    useEffect( ()=>{
        if (window.matchMedia("(prefers-color-scheme: dark)").matches){
            themeIcon.current.classList.add('fa-sun')
        }else{
            themeIcon.current.classList.add('fa-moon')
        }
    }
       ,[])
    
    const themeChange = () =>{
        const doc = document.querySelector('html')
        
        if (doc.classList.contains('dark')){
            document.documentElement.setAttribute("class", "light");
            themeIcon.current.classList.remove("fa-sun");
            themeIcon.current.classList.add("fa-moon");
        }else{
            document.documentElement.setAttribute("class", "dark");
            themeIcon.current.classList.remove("fa-moon");
            themeIcon.current.classList.add("fa-sun");
        }

    }

    return (
        <nav className="NavBar">
            <div className="NavBar-themeMode" onClick={themeChange}><i ref={themeIcon} className="far fa-moon"></i></div>
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
