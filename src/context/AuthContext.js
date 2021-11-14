import {createContext, useContext, useEffect, useState} from 'react'
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

    const [theme, setTheme] = useState('light')

    //en el primer render chequea si el usuario tiene preferencia de colorTheme, y cambia el estado theme
    useEffect( ()=>{
        console.log('here');
    const prefersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
      setTheme(prefersTheme)
  },[])



    return(

        <AuthContext.Provider value={ {user, logIn, logOut, preference:{theme,setTheme}} }>
            {children}
        </AuthContext.Provider>
    )

} 