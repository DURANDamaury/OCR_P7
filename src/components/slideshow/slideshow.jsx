import './Slideshow.scss'
import { useState, useEffect } from 'react'
import ArrowSlideshow from './ArrowSlideshow'



// Composant Slideshow
function Slideshow({pictures}) {
    const [pictureNumber, setPictureNumber] = useState(0)
    const numberOfPictures = pictures.length

    // start of return
    return (
        <div id='slideshow'>
            <div id='slideshow_picture'>
                <div id={`slideshow_picture`} className="slideshow_picture" style={{backgroundImage: `url(${pictures[pictureNumber]})`}}></div>
            </div>
            {
            numberOfPictures && 
            <ArrowSlideshow
                numberOfPictures={numberOfPictures}
                pictureNumber={pictureNumber}
                setPictureNumber={setPictureNumber}
            />
            }
        </div>
    )
    }
    
export default Slideshow