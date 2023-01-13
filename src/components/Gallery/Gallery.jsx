import './Gallery.scss'
import Thumb from './Thumb.jsx'
import ThumbLoader from './ThumbLoader'

import { useEffect , useState } from "react";
//import getAllLogements from "../../Services/LogementService"

function Gallery()
    {
        const [housingDatas,setHousingDatas] = useState([]);
        const [isDataLoading, setDataLoading] = useState(false);

        useEffect(() => {
            setDataLoading(true)
            fetch("./datas/logements.json")
                .then((response) => response.json())
                .then((Datas) =>    {
                                    setHousingDatas(Datas)
                                    setDataLoading(false)
                                    })
                .catch((error) => console.error(error));
                }, []);
        


        return (
            <section className='Gallery'>
                {
                housingDatas.map((housing) => (isDataLoading ? (
                    <ThumbLoader />) : (<Thumb key={housing.id} id={housing.id} cover={housing.cover} title={housing.title} />)
                ))
                }
            </section>
        )
    }

export default Gallery