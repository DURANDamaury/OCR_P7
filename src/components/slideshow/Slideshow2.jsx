import './Slideshow.scss'
import { useState, useEffect } from 'react'
import leftArrow from './assets/ArrowPrevious.png'
import rightArrow from './assets/ArrowNext.png'


// element Slideshow
function Slideshow2({pictures})
    {
        const picturesList=pictures
        const [pictureNumber, setPictureNumber] = useState(0)
        const numberOfPictures = pictures.length

        // Arrow display when only one picture present
        let arrowDiv;

        if (numberOfPictures > 0){
            arrowDiv = 
            <><div id='slideshow_arrow'>
                    <button id='slideshow_arrow_previous' onClick={leftArrowOnClick} ><img src={leftArrow} alt='previous' /></button>
                    <button id='slideshow_arrow_next' onClick={rightArrowOnClick} ><img src={rightArrow} alt='next' /></button>
                </div>
                <div id='slideshow_counter'>
                    <div>{pictureNumber+1}/{numberOfPictures}</div>
                </div></>            
            }

        
        // Left arrow gestion
        function leftArrowOnClick ()
            {
                if (pictureNumber === 0)
                    {setPictureNumber(numberOfPictures-1)}
                else
                    {setPictureNumber(pictureNumber-1)}
            }
        // Right arrow gestion
        function rightArrowOnClick ()
            {
                if (pictureNumber >= numberOfPictures-1) 
                    {setPictureNumber(0);}
                else 
                    {setPictureNumber(pictureNumber + 1)}
            }




        // start of return
        return (
            <div id='slideshow'>
                <div id='slideshow_picture'>
                    <div id={`slideshow_picture`} className="slideshow_picture"  style={{backgroundImage: `url(${picturesList[pictureNumber]})`}}></div>
                </div>
                {arrowDiv}
            </div>
        )
    }

export default Slideshow2