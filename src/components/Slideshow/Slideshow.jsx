import './Slideshow.scss'
import { useState } from 'react'
import ArrowSlideshow from './ArrowSlideshow'



// Composant Slideshow
function Slideshow({pictures}) {
    const [pictureNumber, setPictureNumber] = useState(0)
    const numberOfPictures = pictures.length

    // start of return
    // All pictures url are on pictures const. 
    // displaying picture is set by selecting url on picture with picture number.
    return (
        <div id='slideshow'>
            <div id='slideshow_picture'>
                <div id={`slideshow_picture`} className="slideshow_picture" style={{backgroundImage: `url(${pictures[pictureNumber]})`}}></div>
            </div>
            {
            //arrows wiil not been display if there is only one picture
            numberOfPictures>1 && 
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