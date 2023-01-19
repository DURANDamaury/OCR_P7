import './Thumb.scss';
import { Link } from 'react-router-dom'

function Thumb({id, cover,title})
    {
        return (
            <Link to={`/housing/${id}`} className="Thumb" style={{backgroundImage: `url(${cover})`}}>
                <div className="Thumb_title" >                
                    <div className="Thumb_title_txt">{title}</div>
                </div>
            </Link>
        )
    }

export default Thumb