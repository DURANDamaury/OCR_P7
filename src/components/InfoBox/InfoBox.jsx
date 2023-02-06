import './InfoBox.scss';
import { useState } from "react";
import ButtonClose from "./Assets/ButtonClose.png";
import ButtonOpen from "./Assets/ButtonOpen.png";

function InfoBox({title,txt})
    {
            const [boxState, updateBox] = useState(false);

            return  (
                <div className='InfoBox'>
                    <div className='InfoBox_title'>
                        {title}
                        <button onClick={() => updateBox(!boxState)}><img src={ButtonClose} className={`button_${boxState}`} alt="Button Close" /></button>
                    </div>
                    {boxState ? (
                    <div className='InfoBox_txt'>
                        {txt}
                    </div>
                    ) : null
                    }
                </div>
            )
    }

export default InfoBox