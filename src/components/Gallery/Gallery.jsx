import './Gallery.scss'
import Thumb from './Thumb.jsx'

import Datas from "../../datas/logements.json"


function Gallery()
    {
        return (
            <section>
                {
                Datas.map((Logement) => (
                    <Thumb key={Logement.id} value={`${Logement.id}`} />
                ))
                }
            </section>
        )
    }

export default Gallery