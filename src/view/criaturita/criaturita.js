import React, { useState }  from 'react';
import { Fade } from '@material-ui/core';
import Pog from './images/pog.png';
import './style.css'


const Criaturita = (props) => {
    const [next, setNext] = useState(false);
    const [index, setIndex] = useState(0);
    const [message, setMessage] = useState("")
    const [showImage, setShowImage] = useState(false);
    const [typeGift, setTypeGift] = useState(0);

    const messages  = [
        'Holi mi preciosa Melanie',
        'Eres alguien completamente increible',
        'No me canso de decirlo',
        'Me encanta pasar tiempo contigo',
        'Me encanta hablar contigo',
        'Poco a poco te voy conociendo',
        'Y mas y mas me encantas',
        'Y si que tengo suerte por haberte conocido',
        'Y de verdad espero en un futuro no muy lejano',
        'Ser tu pareja',
        'Y demostrarte lo mucho que te amo.',
        'Maybe, esto te parezca inesperado',
        'Pero i like dar este tipo de cosas :3',
        'Asi que',
        '',
        'Te deseo lo mejor y que te vaya muy bien en todo',
        'Y finalmente, quiero ser parte de tu vida',
        'Te amo Melanie',

    ]
    const handleNext = () => {
        if (index <= 21) {
            setNext(false);
            console.log("Holi");
            if (index === 14) {
                setShowImage(true);
                setTypeGift(3);
            }
            if (index >= 15)
            {
                setShowImage(false);
            }
            setTimeout(() => {
                setMessage(messages[index]);
                setIndex(index + 1);
                setNext(true);
                if (index > 20) setShowImage(true);
            }, 1300)
        }
    }

    return(
        <div className="background-cover" onClick={handleNext} disableStrictModeCompat={true}>
            <Fade in={next} timeout={1000}>
                <p className="main-text">{message}</p>
            </Fade>
            {showImage && 
                <div className="div-images">
                    {typeGift === 3 &&
                        <img src={Pog} style={{width: "150px"}}></img>
                    }
                </div>
            }
        </div>
    )
}


export default Criaturita;