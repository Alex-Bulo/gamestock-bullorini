import { useRef, useState } from 'react';
import { getFirestore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import './Register.css'
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';


function Register() {
    const avatar1 = useRef(null) 
    const {logIn, user} = useAuth()
    

    const [formFields, setFormFields] = useState({
        name: "",
        lastName: "",
        pass: "",
        mail:""
      });
    
      function handleChange(evt) {
        setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
      }




    function onRegister (){

        const pic = avatar1.current.checked ? 'https://cdn3.iconfinder.com/data/icons/delivery-and-logistic-flat/64/23_customer_service_avatar_woman_delivery_logistic_-512.png' : 'https://i.imgur.com/oPh3qdq.png'
        const newUser = {
            name: formFields.name,
            lastName: formFields.lastName,
            mail: formFields.mail,
            pass: formFields.pass,
            pic
        }

        const db = getFirestore();

        const usersCollection = collection(db, "users");

        addDoc(usersCollection, {...newUser}).then( ({ id }) => {
            // console.log('New user ID: ', id)
            logIn(newUser.mail,newUser.pass)

        })



    }

    return (
        <>
            <form  onSubmit={(e)=>e.preventDefault()} className={`Register}`}>
                <h4>Registrate!</h4>
                <div className='registerContainer'>
                    <label>Nombre</label>
                    <input name='name' type='name' className='text' value={formFields.name} onChange={handleChange}/>
                </div>
    
                <div className='registerContainer'>
                    <label>Apellido</label>
                    <input name='lastName' type='lastName' className='text' value={formFields.lastName} onChange={handleChange}/>
                </div>
    
                <div className='registerContainer'>
                    <label>Email</label>
                    <input name='mail' type='email' className='email'value={formFields.mail} onChange={handleChange}/>
                </div>
    
                <div className='registerContainer'>
                    <label>Contraseña</label>
                    <input name='pass' type='password' className='pass' value={formFields.pass} onChange={handleChange}/>
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