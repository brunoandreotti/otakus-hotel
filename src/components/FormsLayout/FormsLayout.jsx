import React from "react";
import { Text, Center } from '@chakra-ui/react'
import imagem from '../../assets/images/restaurant.jpg'
import './FormsLayout.css'

function Register() {
    return (
        <>
        <div id="div-princ"></div>
            <div id="div-pai">

                <div id="div-filho">
                    <img id="imagem" src={imagem} alt="imagem" />
                </div>

            </div>
        </>
    )
}

export default Register;