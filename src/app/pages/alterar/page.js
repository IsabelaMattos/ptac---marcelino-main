'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../componentes/Navbar";

export default function Alterar() {
  const alterar = (e) => {
    e.preventDefault();
    toast.success('Alterado com sucesso')
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
