import './Slideshow.scss'

function Slideshow({pictures})
    {
        return (
            <div id='slideshow'>
                {pictures.map((picture,index) => 
                    <div id={`slideshow_picture_${index}`} className="slideshow_picture">
                        <img src={picture} alt={`house-${index}`} />
                    </div>
                )}
                <div id='arrow_previous'></div>
                <div id='arrow_next'></div>
                
            </div>
        )
    }

export default Slideshow