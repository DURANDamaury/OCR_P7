import './Gallery.scss'
import Thumb from './Thumb.jsx'

import Datas from "../../datas/logements.json"


function Gallery()
    {
        return (
            <section>
                {
                Datas.map((Logement,index) => (
                    <Thumb value={`${Logement.id}`} />
                ))
                }
            </section>
        )
    }

export default Gallery