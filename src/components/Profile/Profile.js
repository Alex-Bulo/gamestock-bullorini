import { useAuth } from '../../context/AuthContext';
import './Profile.css'

function Profile() {    
    const {user} = useAuth()
    
    return (
        <div className="Profile">
            User: {JSON.stringify(user)}
        </div>
    );
}

export default Profile