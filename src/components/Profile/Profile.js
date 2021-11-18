import { useAuth } from '../../context/AuthContext';
import LogIn from '../LogIn/LogIn';
import './Profile.css'

function Profile() {    
    const {user, logOut, preference} = useAuth()

    
    return (
        user ?
            <div className="Profile">
                <h2 className='welcomeMsg'>Hola <span>{user.name}</span>!</h2>
                <img className='avatarPic' src={user.pic} alt={`foto de perfil de ${user.name} ${user.lastName}`}/>
                <p className="profileInfo">Tu preferencia es el <span> {preference.theme} </span>mode</p>
                <p className="profileInfo">Estas registrado con tu mail: <span>{user.mail}</span></p>
                <button className='logOutBtn' onClick={logOut}>Log Out</button>
            </div> 
        :
        <LogIn view={true}/>

    );
}

export default Profile