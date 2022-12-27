import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useForm} from "react-hook-form";
import Form from "../component/common/Form";
import Input from "../component/common/Input";
import LayoutUser from "../component/LayoutUser";
import {NavLink} from "react-router-dom";
import Alert from "../component/common/Alert";

export default function Login(){
  const { signIn } = useContext(AuthContext);
  
  const formMethods = useForm({
    mode: "onChange",
    defaultValues: {userName : "", password : ""},
  });
  
  const children = <>
    <Input label={"Nombre de Usuario"} id={"userName"}
           name={"userName"}  type = {"text"}/>
    <Input label={"Contraseña"} id={"password"}
           name={"password"}   type = {"password"}/>
    <NavLink to={"/register"} title={""}> Registrarse</NavLink>
    <br/>
  </>
  
  return(
    <LayoutUser>
      <Alert/>
      <h3 className={"p-2 mb-4 text-center"}>Iniciar Sesion</h3>
      <Form formMethods={formMethods} onSubmit={signIn}
            id={"formLogin"} children={children}
            btnText={"Iniciar Sesion"}/>
    </LayoutUser>
  )
}
