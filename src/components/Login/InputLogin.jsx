import React from "react";
import { Button, 
        Text, 
        FormLabel, 
        Input 
    } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./InputLogin.css"



function InputLogin() {
    const schema = yup.object().shape({
        email: yup.string().email("Insira um email valido").required("Este campo é obrigatorio"),
        senha: yup.string().required("Este campo é obrigatorio")
      })
    
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })
    
    const addGet = value => console.log(value)

    return (
        <>
            <div id="div-formulario">
                <form id="input" onSubmit={handleSubmit(addGet)}>
                    
                    <FormLabel>Email</FormLabel>
                    <Input 
                    bg="white" 
                    w={[230, 350, 200, 270, 330]} 
                    h={[50]} 
                    mb="2" 
                    type="email"
                    name="email" {...register("email")}
                    />
                    <Text color="white" fontSize={15}>
                        {errors.email?.message}
                    </Text>
                    
                    <FormLabel>Senha</FormLabel>
                    <Input 
                    bg="white" 
                    w={[230, 350, 200, 270, 330]} 
                    h={[50]} 
                    mb="2" 
                    type="password" 
                    name="senha" {...register("senha")}
                    />
                    <Text color="white" fontSize={15}>
                        {errors.senha?.message}
                    </Text><br/>


                    <Button 
                    type="submit"
                    w={[230, 330, 200, 270, 330]} 
                    h={[50]} 
                    top="2" 
                    border="1" 
                    borderColor="white"
                    >Entrar
                    </Button>

                </form>
            </div>
        </>
    )
}

export default InputLogin;