import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'


function NotFound({game}) {
    const [gamePic, setGamePic] = useState(game?0:null)
    
    
    
    useEffect( () => {
        if(gamePic===null){
            setGamePic(null)
        }else{
            const changeGame = ()=>{
                if(gamePic < game.images.length){
                    setGamePic(gamePic => gamePic + 1)
                }else{
                    setGamePic(0)
                }
                
            }
            
            const timeLapse = setTimeout(changeGame ,3000)
            
            return () => clearInterval(timeLapse)
        }    
    }   
        ,[gamePic, game.images.length])

    return (
        <section className="NotFound">
            <header className="notFoundInfo">
                <div className="msg">No encontramos los que estabas buscando. De todas formas, <span>sigue explorando nuestro sitio:</span></div>
                <ul className="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/category/playstation">Juegos de Playstation</Link>
                    <Link className="link" to="/category/pc">Juegos de PC</Link>
                    <Link className="link" to="/category/xbox">Juegos de Xbox</Link>
                </ul>

            </header>
            {game &&
                    <article className="gameContainer">

                        <div className="gameInfo">
                            <div className="gameFacts">
                                <h4 className="gameName">{game.name}</h4>
                                <h4 className="gamePlatform">{game.platform}</h4>
                                <p className="gameDate">Primera entrega: {game.released}</p>
                            </div>
                            <img src={game.images[gamePic]} alt={`Screenshot de ${game.name}`}/>
                        </div>                   
        
                    </article>
            }

        </section>
        
    );
}

export default NotFound