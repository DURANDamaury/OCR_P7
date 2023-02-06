import './InfoBox.scss';
import { useState } from "react";
import ButtonClose from "./Assets/ButtonClose.png";


/* componant must receive title, txt and txttype(boxType) */
/* boxType must be 'txt' for simple text data or 'elementList' for a list of elements */
/* if boxType is not one of this type, 'type inconnu' will be display */
/* You can add others type */

function InfoBox({title,txt,boxType})
    {
            /* state for opening box */
            /* is open= true */
            const [boxState, updateBox] = useState(false);


            /* Verification of txt type */
            /* boxTXT will contain what to add to the InfoBox_txt Div */
            let boxTXT
            if (boxType === 'txt') {boxTXT= txt}
            else if (boxType === 'elementList') {boxTXT = <ul>{txt.map( (equipment) => (<li key={equipment}>{equipment}</li>) )}</ul>}
            else {boxTXT = 'type inconnu'}
            /* End of txt type */


            return  (
                <div className='InfoBox'>
                    {/* Title will always been seen */}
                    <div className='InfoBox_title'>
                        {title}
                        {/* a class is add in function of the state of the box for animation button_false or button_true */}
                        <button onClick={() => updateBox(!boxState)}><img src={ButtonClose} className={`button_${boxState}`} alt="Button Close" /></button>
                    </div>

                    {/* If state is true InfoBox will be open (exist) */}
                    
                    {boxState ? (
                            <div className='InfoBox_txt'>
                                {boxTXT}
                            </div>
                        ) : null
                    }
                </div>
            )
    }

export default InfoBox