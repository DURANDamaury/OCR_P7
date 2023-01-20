import starFull from './Assets/StarFull.png';
import starEmpty from './Assets/StarEmpty.png';
import './Rate.scss'

function Rate({rate})
    {
        const rateRange = [1,2,3,4,5]
        const rateValue = rate
        return (
            <div id="rate">
                {rateRange.map((rangeElem) =>
                    rateValue >= rangeElem ? 
                    <img key={rangeElem.toString()} src={starFull} alt='Full Star' /> :
                    <img key={rangeElem.toString()} src={starEmpty} alt='Empty Star' />
                )}
            </div>
        )
    }

export default Rate