import './Gallery.scss'
import Thumb from './Thumb.jsx'
import ThumbLoader from './ThumbLoader'

import { useFetch } from '../../Services/LogementService';


function Gallery()
    {
        const { data, isLoading, error } = useFetch(`./datas/logements.json`)

        if (error) {return <span>Error</span>}

        return (
            <section className='Gallery'>
                    {
                    data.map((housing) => (isLoading ? (
                        <ThumbLoader />) : (<Thumb key={housing.id} id={housing.id} cover={housing.cover} title={housing.title} />)
                    ))
                    }
                
            </section>
        )
    }

export default Gallery