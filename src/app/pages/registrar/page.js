'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../componentes/Navbar";

export default async function Registrar() {
  const registrar = (e) => {
    e.preventDefault();
    toast.success('Registrado com sucesso')
  }
  return (
    <div className="register">
      <Navbar/>
      <div className="se registre">
        <center><h1><i>Registra-se</i></h1></center>
        <form onSubmit={registrar}>
          <div className="name">
          <center><label for="">Nome:</label>
          <input id="nome" type="text" placeholder="Nome"/></center>
          </div><br/>
          <div className="email">
          <center><label for="">Email:</label>
          <input id="email" type="email" placeholder="email@gmail.com"/></center>
          </div><br/>
          <div className="password">
          <center><label for="">Senha:</label>
          <input id="senha" type="text" placeholder="senha"/></center>
          </div><br/>

          <center><button className="botao">ENTRAR</button></center>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};