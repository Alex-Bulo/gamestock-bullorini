import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'


function NotFound({NASA}) {
    const [nasaPic, setNasaPic] = useState(0)
    setTimeout(()=>{
        
        if(nasaPic===3){
            setNasaPic(0)
        }else{
            setNasaPic(nasaPic + 1)
        }

    },5000)

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

            <article className="NASAContainer">

                    <div className="NASAinfo">
                        <img src={NASA[nasaPic].url}/>
                        <h3 className="NASADate">Astronomy Picture of {NASA[nasaPic].date}</h3>
                        <h2 className="NASAName">{NASA[nasaPic].title}</h2>
                    </div>
        
            

            </article>




         



        </section>
        
    );
}

export default NotFound