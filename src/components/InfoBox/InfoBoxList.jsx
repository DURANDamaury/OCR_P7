import './InfoBox.scss';
import { useState } from "react";
import ButtonClose from "./Assets/ButtonClose.png";
import ButtonOpen from "./Assets/ButtonOpen.png";

function InfoBoxList({title,txt})
    {
            const [boxState, updateBox] = useState(false);

            return boxState ? (
                <div className='InfoBox'>
                    <div className='InfoBox_title'>
                        {title}
                        <button onClick={() => updateBox(false)}><img src={ButtonClose} alt="Button Close" /></button>
                    </div>
                    <div className='InfoBox_txt'>
                        <ul>
                            {txt.map( (equipment) => (<li key={equipment}>{equipment}</li>) )}
                        </ul>
                    </div>
    
                </div>
            ) : (
                <div className='InfoBox'>
                    <div className='InfoBox_title'>
                    {title}
                    <button onClick={() => updateBox(true)}><img src={ButtonOpen} alt="Button Open" /></button>
                    </div>
                </div>
            )
    }

export default InfoBoxList