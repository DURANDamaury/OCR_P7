import './Gallery.scss'
import Thumb from './Thumb.jsx'
import ThumbLoader from './ThumbLoader'


import { useFetch } from '../../Services/HousingService';
// import { useState, useEffect } from 'react'
// import { getAllData } from '../../Services/HousingService'

function Gallery()
    {
        

        // const [data, setData] = useState([])            //internal state to stock data     
        // const [isLoading, setLoading] = useState(true)  //internal state for loading status(true for start)
        // const [error, setError] = useState(false)       //state for api error

        // const dataRead = getAllData()
        // setData(dataRead)
        // console.log(data)


const { data, isLoading, error } = useFetch(`./datas/logements.json`)

        if (error) {return <span>Error</span>}


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