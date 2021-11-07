import {createContext, useContext, useState} from 'react'
import {users} from '../helpers/data'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)

    const logIn = (mail,password) =>{
        const getUsers = 
        new Promise ((resolve)=>{
            setTimeout( ()=> {
                resolve(users)
            },2000)
        })

    getUsers
        .then((result)=>{
                let foundUser
                result.forEach (u =>{
                    if(u.mail === mail && u.password === password){
                        foundUser = u
                    }
                })
                foundUser && setUser(foundUser)
            }
        )        
    }



    const logOut = () =>{
        setUser( null )
    }

    return(

        <AuthContext.Provider value={ {user, logIn, logOut} }>
            {children}
        </AuthContext.Provider>
    )

} 