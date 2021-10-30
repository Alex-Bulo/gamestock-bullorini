import './NotFoundContainer.css'
import config from '../../helpers/config'
import { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';

const {NASA_API_KEY} = config

function NotFoundContainer() {
    const [today, setToday] = useState(new Date())
    const [NASAinfo, setNASAinfo] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const startDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate() - 3}`
        const endDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        console.log(startDate, typeof startDate);

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}`)
            .then(response => response.json())
            .then(data =>{
                setNASAinfo(data)
                setLoading(false) 
                console.log('hice un fetch');  
            })

    }
        ,[])



    return (
        <main className="NotFoundContainer">

        {NASAinfo &&     
            <NotFound NASA={NASAinfo}/> 
        }
        {loading && <h3>No pudimos encontrar la página que deseas...</h3>}
        </main>

    );
}

export default NotFoundContainer