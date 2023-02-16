import './Gallery.scss'
import Thumb from './Thumb.jsx'
import Loader from '../Loader/Loader'


import { useState, useEffect } from 'react'
import { fetchData } from '../../Services/HousingService'

//Gallery display all logements
function Gallery()
    {        
        const [data, setData] = useState()              //internal state to stock data    
        const [isLoading, setLoading] = useState(true)  //internal state for loading status(true for start)
        const [error, setError] = useState(false)       //internal state for error on loading dada


        //data recupération service
        useEffect(() => {
            fetchData()
                .then((locations) => {
                    //timeOut is set for testing. You have to delete it for final version
                    setTimeout(() => {
                        setData(locations);
                        setLoading(false);
                    }, 2000);
                    })
                .catch((err) => {
                    setError(err);
                    });
            }, []);


        //if error is set, don't display anythink except error message
        if (error) {return <span>Error</span>}

        //else display Gallery
        return (
            <section id='gallery'>
                {
                    //loading bar if loading state is true
                    isLoading ? <Loader /> : data.map((housing) => 
                    (<Thumb key={housing.id} id={housing.id} cover={housing.cover} title={housing.title} />))
                }
                    
            </section>
        )
    }

export default Gallery