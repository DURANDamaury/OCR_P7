import './Gallery.scss'
import Thumb from './Thumb.jsx'
import ThumbLoader from './ThumbLoader'


import { useState, useEffect } from 'react'
import { fetchData } from '../../Services/HousingService'

function Gallery()
    {        
        const [data, setData] = useState()            //internal state to stock data    
        const [isLoading, setLoading] = useState(true)  //internal state for loading status(true for start)
        const [error, setError] = useState(false)
        //ici tu serai besion d'appeler ton service pour recupere les donnes via useEffect :
        useEffect(() => {
            fetchData()
                .then((locations) => {
                    setData(locations);
                    setLoading(false);
                    })
                .catch((err) => {
                    setError(err);
                    });
            }, []);


//const { data, isLoading, error } = useFetch(`./datas/logements.json`)

        if (error) {return <span>Error</span>}
        console.log (data)

        return (
            <section id='gallery'>
                    {
                    data.map((housing) => (isLoading ? (
                        <ThumbLoader />) : (<Thumb key={housing.id} id={housing.id} cover={housing.cover} title={housing.title} />)
                    ))
                    }                
            </section>
        )
    }

export default Gallery