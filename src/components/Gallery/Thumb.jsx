import './Thumb.scss';
import Datas from "../../datas/logements.json"

function Thumb(props)
    {
        
        const Logement = Datas.find(Logement => Logement.id === props.value)


        return (
            <div className="Thumb" style={{backgroundImage: `url(${Logement.cover})`}}>
                <div className="Thumb_title">
                    <div className="Thumb_title_txt">{Logement.title}</div>
                </div>
            </div>
        )
    }

export default Thumb