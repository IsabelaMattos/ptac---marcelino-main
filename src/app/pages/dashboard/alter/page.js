'use client'
import { UpdateUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { React, Suspense, useState } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../../componentes/Navbar";

export default function Alterar({params}) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const {push} = useRouter()
  const alterado = () => {

  }
  const handlerFormSumit = async (event) => {
    event.preventDefault();
    try {
      await UpdateUser(user, params.id);
      await new Promise((resolve) => {
        toast.success("Alterado com sucesso!");
        setTimeout(resolve, 5000);
        alterado();
      });
      return push("/pages/dashoboard");
    }
  }
  return (
    <div className="register">
      <Navbar/>
      <div className="se registre">
      <center><h1><i>Alterar-se</i></h1></center>
      <form onSubmit={alterar}>
      <center>
          <div className="name">
          <label for="">Nome:</label>
          <input id="nome" type="text" placeholder="Nome"/>
          </div><br/>
          <div className="email">
          <label for="">Email:</label>
          <input id="email" type="email" placeholder="email@gmail.com"/>
          </div><br/>
          <div className="password">
          <label for="">Senha:</label>
          <input id="senha" type="text" placeholder="senha"/>
          </div></center><br/>

         <center> <button className="botao">ENTRAR</button></center>
        </form>
      <ToastContainer />
      </div>
    </div>
  );
};
