import Loader from "react-loader-spinner";
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
        
            fetch(`${GAMEDB}${randomID}?key=${GAMEDB_API_KEY}`)
                .then(response => response.json())
                .then(data =>{
                    if(data.details){
                        console.log(randomID, 'Not Found');
                        setRandomID(Math.floor(Math.random() * 60000))
                    }else{
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
    
                    }

            })
                .catch( error => {
                    console.log('Random ID no existe en la public API');
                    setRandomGame(null)
                    setLoading(false)
                })
                
            console.log('hice un fetch');  
        }
        ,[randomID])



    return (
        <main className="NotFoundContainer">
            {loading ? 
                <>
                    <h3>No pudimos encontrar la p??gina que deseas...</h3>
                    <Loader type='Rings' color='var(--accent-font-color)' height={80} width={80}/>
                </>
                    :
                <NotFound game={randomGame}/>}
        </main>

    );
}

export default NotFoundContainer