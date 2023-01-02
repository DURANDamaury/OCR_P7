import './Thumb.scss';
import Datas from "../../datas/logements.json"

function Thumb(props)
    {
        const value = props.value;
        //const key = value.toString();
        const Logement = Datas.find(Logement => Logement.id === props.value)


        return (
            <div key={value} className="Thumb" style={{backgroundImage: `url(${Logement.cover})`}}>
                <div className="Thumb_title">
                    <div className="Thumb_title_txt">{Logement.title}</div>
                </div>
            </div>
        )
    }

export default Thumb