import './InfoBox.scss';
import { useState } from "react";
import ButtonClose from "./Assets/ButtonClose.png";

function InfoBox({title,txt,boxType})
    {
            const [boxState, updateBox] = useState(false);
            console.log({boxType})

            let boxTXT

            if (boxType === 'txt') {boxTXT= txt}
            else if (boxType === 'elementList') {boxTXT = <ul>{txt.map( (equipment) => (<li key={equipment}>{equipment}</li>) )}</ul>}
            else {boxTXT = 'type inconnu'}

            return  (
                <div className='InfoBox'>
                    {/* Peut importe l'état de la box, le titre sera toujours affiché*/}
                    <div className='InfoBox_title'>
                        {title}
                        {/* En fonction du state d'ouverture on ajoutera une classe pour l'animation de rotation du bouton: button_false ou button_true */}
                        <button onClick={() => updateBox(!boxState)}><img src={ButtonClose} className={`button_${boxState}`} alt="Button Close" /></button>
                    </div>

                    {/* On verifiera le state ici afin d'afficher ou non la box de texte */}
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