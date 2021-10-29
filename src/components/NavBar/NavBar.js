import logo from '../../assets/images/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar(props) {
    const themeIcon = props.themeIcon
   
    return (
        <>
            <nav className="NavBar">
                <div className="NavBar-themeMode" >
                    <i onClick={props.themeHandler} className={`${themeIcon}`}></i>
                    <img src={logo} className="NavBar-logo" alt="logo" />
                </div>
                
                <CartWidget/>

                <ul className="NavBar-menu">
                    
                    { props.categories ?
                    props.categories.map( (category,i) =>{
                        return <li key={i} className="NavBar-items"> <a href="/#" className="NavBar-menuItems"> {category} </a></li>
                    })
                    :'Bienvenido/a'
                    }
                                    
                    <li className="NavBar-items NavBar-login"> <i className="fas fa-user"></i> Ingresar </li>

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
