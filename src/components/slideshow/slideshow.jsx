import './Slideshow.scss'
import { useState, useEffect } from 'react'
import leftArrow from './assets/ArrowPrevious.png'
import rightArrow from './assets/ArrowNext.png'


// element Slideshow
function Slideshow({pictures})
    {
        const [pictureNumber, setPictureNumber] = useState(0)
        const numberOfPictures = pictures.length

        // classname initialisation for the first picture of the slide
        useEffect(() => {
            const firstPicture = document.getElementById('slideshow_picture_0')
            firstPicture.classList.remove("disable");
            firstPicture.classList.add("active");       
        }, [])




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
                console.log('click à gauche')
            }
        // Right arrow gestion
        function rightArrowOnClick ()
            {
                console.log('click à droite')
                const actualPicture = `slideshow_picture_${pictureNumber}`;
                const actualPictureDiv = document.getElementById(actualPicture);
                //remove class "active" from actual picture
                actualPictureDiv.classList.remove("active")
                actualPictureDiv.classList.add("disable")

                console.log(pictureNumber,'/',numberOfPictures)
                if (pictureNumber >= numberOfPictures) {
                    setPictureNumber(pictureNumber === 0); 
                    console.log('pictureNumber',pictureNumber)}
                else {
                    console.log('picture number',pictureNumber)
                    setPictureNumber(pictureNumber + 1);
                    console.log('pictureNumber inc',pictureNumber);
                    const newPicture = `slideshow_picture_${pictureNumber}`;
                    const newPictureDiv = document.getElementById(newPicture);
                    newPictureDiv.classList.remove("disable");
                    newPictureDiv.classList.add("active");
                }
            }






        // start of return
        return (
            <div id='slideshow'>
                <div id='slideshow_picture'>
                    {pictures.map((picture,index) => 
                        <div id={`slideshow_picture_${index}`} className="slideshow_picture disable" key={`picture-${index}`} style={{backgroundImage: `url(${picture})`}}>
                        </div>
                    )}
                </div>
                {arrowDiv}
            </div>
        )
    }

export default Slideshow