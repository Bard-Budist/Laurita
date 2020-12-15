import React, { useState }  from 'react';
import { Fade } from '@material-ui/core';
import CatImage from './images/ponito.png'
import Barriletes from './images/barriletes.png';
import Pancito from './images/pancito.png';
import './style.css'


const Criaturita = (props) => {
    const [next, setNext] = useState(false);
    const [index, setIndex] = useState(0);
    const [message, setMessage] = useState("")
    const [showImage, setShowImage] = useState(false);
    const [typeGift, setTypeGift] = useState(0);


    const messages  = [
        'Hola mi preciosa Carol...',
        'Primero que todo, este detalle lo pense para fin de año',
        'Pero bueno, mejor ahora que tarde.',
        'Te quiero decir un par de cosas',
        'Lo primero es que eres una de las mejores personas',
        'Que he conocido, asi con todas tus cosas que hacen parte de ti',
        'Por ello trato de placerte en lo que pueda',
        'Asi como satisfacer tus antojo y demas cosas bb',
        'Tambien dejame decirte que literal me enamore de tu sonrisa :o',
        'Que se que la escondes por tus problemas y eso',
        'Pero aun asi no te quitan lo brillante que eres...',
        'Asi con cada una de tus hermosas curvas',
        'Con cada una de tus expreciones que note cuando hablamo', 
        'Con cada uno de tus buenas/malas expereciencias.',
        'Me encantas defenitivamente, eres mi tormenta favorita.',
        'Y tambien no sabes lo mucho que me alegra que te estes',
        'Sintiendote mejor y espero realmente que asi sea durante un buen tiempo',
        'Lo dire y lo seguire diciendo, eres increible preciosa!!',
        'Para terminar',
        'Te quiero muchisimo y espero tenerte a mi lado durante mucho tiempo',
        '♡',
    ]
    const  handleNext = () => {
        if (index <= 21) {

            setNext(false);
            setTimeout(() => {
                setMessage(messages[index]);
                setIndex(index + 1);
                setNext(true);
                if (index > 20) setShowImage(true)
            }, 1300)
        } else {
            setIndex(index + 1);
            setTypeGift(typeGift + 1)
        }
        if (index >= 25) {
            setShowImage(false);
            setMessage('Te quiero mucho Laura!')
        }
    }

    return(
        <div className="background-cover" onClick={handleNext} disableStrictModeCompat={true}>
            <Fade in={next} timeout={2000}>
                <p className="main-text" >{message}</p>
            </Fade>
           
            {showImage && 
                <div className="div-images">
                    {typeGift === 1 && 
                        <img src={Barriletes}  style={{width: "100px"}}></img>
                    }
                    {typeGift === 2 &&
                        <img src={Pancito} style={{width: "150px"}}></img>
                    }
                    <img src={CatImage} style={{width: "150px"}}></img>


                    
                </div>
            }
           
            


        </div>
    )
}


export default Criaturita;