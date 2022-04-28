import React from "react";
import { Text, Center } from '@chakra-ui/react'
import Imagem from '../../assets/images/restaurant.jpg'
import './FormsLayout.css'

function Register({ TituloPage }) {
    return (
        <>
            <Center>
                <Text fontSize={50}>{TituloPage}</Text>
            </Center>

            <div id="div-pai">

                <div id="div-filho">
                    <img id="imagem" alt="foto restaurante" src={Imagem} />
                </div>

            </div>
        </>
    )
}

export default Register;