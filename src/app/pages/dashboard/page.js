import 'react-toastify/dist/ReactToastify.css';
import { getUsers } from "@/app/functions/handlerAcessAPI";
import  Navbar from "../../componentes/Navbar";

export default async function Dashboard() {
   
    const users = getUsers();
    return (
        <div>
            <div className="dash">
             <Navbar/>
         </div>
             <div className="classlist">
                <center><h1 className="dash1"><i>Usuários</i></h1></center>
                <div className="listuser">
                   {users?.map((user, index) =>
                      <p key={index}>
                             {user.name} 
                      </p>          
            )} 
        </div>
    </div>
  </div>    
   );
};