import './Gallery.scss'
import Thumb from './Thumb.jsx'


import { useEffect , useState } from "react";
//import getAllLogements from "../../Services/LogementService"

function Gallery()
    {
        const [housingDatas,setHousingDatas] = useState([]);

        useEffect(() => {
            fetch("./datas/logements.json")
                .then((response) => response.json())
                .then((Datas) => setHousingDatas(Datas))
                .catch((error) => console.error(error));
                }, []);
        


        return (
            <section className='Gallery'>
                {
                housingDatas.map((housing) => (
                    <Thumb key={housing.id} cover={housing.cover} title={housing.title} />
                ))
                }
           </section>
        )
    }

export default Gallery