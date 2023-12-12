'use client'
import { UpdateUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { React, Suspense, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../../componentes/Navbar";

export default function Alter({params}) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const {push} = useRouter()
  const alterado = () => {

  }
  const handlerSubmit = async (event) => {
    event.preventDefault();
    try {
      await UpdateUser(user, params.id);
      await new Promise((resolve) => {
        toast.success("Alterado com sucesso!");
        setTimeout(resolve, 5000);
        alterado();
      });
      return push("/pages/dashoboard");
    } catch {
      return toast.error("Erro");
    }
  };
  return (
    <div>
      <div className="tudão">
    <form method="alterar" onSubmit={handlerSubmit}></form>
    <div className="register">
      <Navbar/>
      <div className="se registre">
      <center><h1><i>Alterar-se</i></h1></center>
      <center>
          <div className="name">
          <label for="">Nome:</label>
          <input id="nome" type="text" placeholder="Nome" onChange={(e) => { setUser({...user, name: e.target.value })}}/>
          </div><br/>
          <div className="email">
          <label for="">Email:</label>
          <input id="email" type="email" placeholder="email@gmail.com" onChange={(e) => { setUser({...user, email: e.target.value })}}/>
          </div><br/>
          <div className="password">
          <label for="">Senha:</label>
          <input id="senha" type="text" placeholder="senha" onChange={(e) => { setUser({...user, senha: e.target.value })}}/>
          </div></center><br/>
          <center> <button className="botao">ENTRAR</button></center>
    </div>
    </div>
    <ToastContainer />
    </div>
    </div>
  );
};
