import './Slideshow.scss'
import { useState, useEffect } from 'react'
import leftArrow from './assets/ArrowPrevious.png'
import rightArrow from './assets/ArrowNext.png'


// element Slideshow
function Slideshow({pictures})
    {
        const [pictureNumber, setPictureNumber] = useState(1)
        const numberOfPictures = pictures.length
        let arrowDiv;
        // Arrow display when only one picture present
        if (numberOfPictures > 1){
            arrowDiv = 
            <><div id='slideshow_arrow'>
                    <button id='slideshow_arrow_previous' onClick={leftArrowOnClick} ><img src={leftArrow} alt='previous' /></button>
                    <button id='slideshow_arrow_next' onClick={rightArrowOnClick} ><img src={rightArrow} alt='next' /></button>
                </div>
                <div id='slideshow_counter'>
                    <div>{pictureNumber}/{numberOfPictures}</div>
                </div></>            
            }
        // onclick gestion
        
        // Left arrow gestion
        function leftArrowOnClick ()
            {
                console.log('click à gauche')
            }
        // Right arrow gestion
        function rightArrowOnClick ()
            {
                console.log('click à droite')
                const actualPicture = `slideshow_picture_${pictureNumber}`;
                const actualPictureDiv = document.getElementById(actualPicture);
                console.log(actualPictureDiv)
                if (pictureNumber >= numberOfPictures) {setPictureNumber(pictureNumber === 1)}
                else {setPictureNumber(pictureNumber+1)}
            }

        // start of return
        return (
            <div id='slideshow'>
                <div id='slideshow_picture'>
                    {pictures.map((picture,index) => 
                        <div id={`slideshow_picture_${index}`} className="slideshow_picture" key={`picture-${index}`} style={{backgroundImage: `url(${picture})`}}>
                        </div>
                    )}
                </div>
                {arrowDiv}
                
            </div>
        )
    }

export default Slideshow