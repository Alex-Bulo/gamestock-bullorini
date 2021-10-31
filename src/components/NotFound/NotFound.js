import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'


function NotFound({game}) {
    const [gamePic, setGamePic] = useState(0)
    let timeLapse = () => {
        setTimeout(()=>{
            if(gamePic < game.images.length){
                setGamePic(gamePic +1)
            }else{
                setGamePic(0)
            }
    
        },5000)
    }
    const destroyTimeLapse =()=>timeLapse = console.log('unmounted!');

    useEffect(() => {
        timeLapse()
         return ()=>destroyTimeLapse
    }
        ,[])

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

            <article className="gameContainer">

                    <div className="gameInfo">
                        <img src={game.images[gamePic]}/>
                        <h3 className="gameDate">Primera entrega: {game.released}</h3>
                        <h2 className="gameName">{game.name}</h2>
                        <h2 className="gamePlatform">{game.platform}</h2>
                    </div>
        
            

            </article>




         



        </section>
        
    );
}

export default NotFound