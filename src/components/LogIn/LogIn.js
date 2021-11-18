import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './LogIn.css'


function LogIn({view}) {
    const mail = useRef(null)
    const pass = useRef(null) 
    const {logIn} = useAuth()

    function notClose(e){
        e.stopPropagation()
    }

    function onLogIn (){
        logIn(mail.current.value, pass.current.value)
    }

    return (
        <form onClick={notClose} onSubmit={(e)=>e.preventDefault()} className={`LogIn ${view?'show':'noShow'}`}>
            <h4>Ingresa</h4>
            <input type='email' className='email' ref={mail}/>
            <input type='password' className='pass'ref={pass}/>
            <button className='logInBtn' onClick={onLogIn}>Ingresar</button>
            <Link to='/register'>Registrarse</Link>
        </form>
    );
}

export default LogIn