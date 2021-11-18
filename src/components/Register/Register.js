import { useRef } from 'react';
import { getFirestore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import './Register.css'
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';


function Register() {
    
    const mail = useRef(null)
    const pass = useRef(null) 
    const name = useRef(null) 
    const lastName = useRef(null) 
    const avatar1 = useRef(null) 
    const {logIn, user} = useAuth()


    function onRegister (){

        const pic = avatar1.current.checked ? 'https://cdn3.iconfinder.com/data/icons/delivery-and-logistic-flat/64/23_customer_service_avatar_woman_delivery_logistic_-512.png' : 'https://i.imgur.com/oPh3qdq.png'
        const newUser = {
            name: name.current.value,
            lastName: lastName.current.value,
            mail: mail.current.value,
            pass: pass.current.value,
            pic
        }

        const db = getFirestore();

        const usersCollection = collection(db, "users");

        addDoc(usersCollection, {...newUser}).then( ({ id }) => {
            console.log('New user ID: ', id)
            logIn(newUser.mail,newUser.pass)

        })



    }

    return (
        <>
            <form  onSubmit={(e)=>e.preventDefault()} className={`Register}`}>
                <h4>Registrate!</h4>
                <div className='registerContainer'>
                    <label>Nombre</label>
                    <input type='name' className='text' ref={name}/>
                </div>
    
                <div className='registerContainer'>
                    <label>Apellido</label>
                    <input type='lastName' className='text' ref={lastName}/>
                </div>
    
                <div className='registerContainer'>
                    <label>Email</label>
                    <input type='email' className='email' ref={mail}/>
                </div>
    
                <div className='registerContainer'>
                    <label>Contraseña</label>
                    <input type='password' className='pass'ref={pass}></input>
                </div>
    
                <div className='registerContainer avatarChoice'>
                    <label>Elegir Avatar</label>
    
                    <label className='avatarContainer'>
                        <input name='avatar' type='radio' defaultChecked ref={avatar1}></input>
                        <img alt='default avatar 1' src='https://cdn3.iconfinder.com/data/icons/delivery-and-logistic-flat/64/23_customer_service_avatar_woman_delivery_logistic_-512.png'/>
                    </label>
    
                    <label className='avatarContainer'>
                        <input name='avatar' type='radio'></input>
                        <img alt='default avatar 2' src='https://i.imgur.com/oPh3qdq.png'/>
                    </label>
                </div>
              
    
                <button className='RegisterBtn' onClick={onRegister}>Registrar</button>
            </form>

            {user && <h3>Te has registrado con éxito!. Visita tu <Link to='/profile'> Perfil</Link></h3>}

        </>
    
        
    );
}

export default Register