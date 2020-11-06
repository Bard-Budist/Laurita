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
        'Holi criaturita',
        'Se supone que este era tu regalo de cumple... :c',
        'Pero bueno, mejor es algo que nadita',
        'Asi que imagina que el dia de hoy es tu cumple, si?',
        'Lo que te queria decir es...',
        'Pero antes de todo, te preguntaras el porque de esto',
        'Y tienes razon...',
        'El porque es devido a que es el primer cumpleaños que presenció',
        'O por lo menos el que recordare',
        'Y demas cosas aburridas como el hecho',
        'De que me alegraste mi existencia',
        'Asi que no lo tomare como uno normalito :D',
        'En fin...', 
        'Espero que pases un Noviembre bonito(Porque no?)',
        'Nunca pares de alegrar al mundo como lo haces ahora!',
        'Y de ser guay!',
        'Y aunque tu cabeza no te quiera :c',
        'Como tu dices, disfruta cada dia como si fuera el ultimo',
        '¡Feliz Cumpleaños Laura!(x2)',
        'Te debo una torta bien sabrosa',
        'Y como regalito extra...',
        'Redobles....',
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