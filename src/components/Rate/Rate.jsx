import starFull from './Assets/StarFull.png';
import starEmpty from './Assets/StarEmpty.png';
import './Rate.scss'

//stars rate
function Rate({rate})
    {
        //a table is create to use with map
        const rateRange = [1,2,3,4,5]
        //rateValue contain the rate score
        const rateValue = rate
        return (
            <div id="rate">
                {
                //for each value of rateRange table, a comparaison is made with rate score
                //if rate score is >= to actual rateRange value, a full star is display else an empty one
                rateRange.map((rangeElem) =>
                    rateValue >= rangeElem ? 
                    <img key={rangeElem.toString()} src={starFull} alt='Full Star' /> :
                    <img key={rangeElem.toString()} src={starEmpty} alt='Empty Star' />
                )}
            </div>
        )
    }

export default Rate