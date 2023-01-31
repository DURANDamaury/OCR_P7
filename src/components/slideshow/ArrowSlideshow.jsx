// Composant ArrowSlideshow
import leftArrow from './assets/ArrowPrevious.png'
import rightArrow from './assets/ArrowNext.png'


function ArrowSlideshow({setPictureNumber, pictureNumber, numberOfPictures}) 
{
  // Left arrow gestion
    function leftArrowOnClick() 
        {
        if (pictureNumber === 0) 
            {
            setPictureNumber(numberOfPictures - 1)
            } 
        else 
            {
            setPictureNumber(pictureNumber - 1)
            }
        }

  // Right arrow gestion
    function rightArrowOnClick() {
        if (pictureNumber >= numberOfPictures - 1) 
            {
                setPictureNumber(0);
            } 
        else 
            {
            setPictureNumber(pictureNumber + 1)
            }
        }

    return (
        <>
            <div id='slideshow_arrow'>
                <button id='slideshow_arrow_previous' onClick={leftArrowOnClick}><img src={leftArrow} alt='previous'/></button>
                <button id='slideshow_arrow_next' onClick={rightArrowOnClick}><img src={rightArrow} alt='next'/></button>
            </div>
            <div id='slideshow_counter'>
                <div>{pictureNumber + 1}/{numberOfPictures}</div>
            </div>
        </>)
}

export default ArrowSlideshow