import './NotFoundContainer.css'
import config from '../../helpers/config'
import { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';

const {GAMEDB_API_KEY} = config
const GAMEDB = 'https://api.rawg.io/api/games/'

function NotFoundContainer() {
    const [randomID, setRandomID] = useState(Math.floor(Math.random() * 60000))
    const [randomGame, setRandomGame] = useState(null)
    const [loading, setLoading] = useState(true)

    
    useEffect( () => {
        console.log(randomID);
        try {
            fetch(`${GAMEDB}${randomID}?key=${GAMEDB_API_KEY}`)
                .then(response => response.json())
                .then(data =>{
                    let info = {
                        name: data.name,
                        released: data.released,
                        platform: data.parent_platforms[0].platform.name,
                        images:[]
                    }
                    
                    fetch(`${GAMEDB}${randomID}/screenshots?key=${GAMEDB_API_KEY}`)
                    .then(response => response.json())
                    .then(data =>{
                        
                        data.results.forEach(e=> {
                            e.is_deleted ||
                                info.images.push(e.image)
                        })
                        
                        setRandomGame(info)
                        setLoading(false)
                    })
            })    
        } catch (error) {
            setRandomID(Math.floor(Math.random() * 60000))
        }
        
        
            console.log('hice un fetch');  
    }
        ,[randomID])



    return (
        <main className="NotFoundContainer">
            {loading ? <h3>No pudimos encontrar la página que deseas...</h3> :<NotFound game={randomGame}/>}
        </main>

    );
}

export default NotFoundContainer