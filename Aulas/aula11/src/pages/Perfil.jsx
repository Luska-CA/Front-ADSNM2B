import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import Menu from "../components/Menu";
import Formulario from "./Formulario";
//import { atualizar } from "../contexts/AuthContext";

function Perfil() {
  const [msg, setMsg] = useState("");
  const { usuario, atualizar } = useContext(AuthContext);
  const {id} = useParams();



  onEnviar = async (data) => {
    const erro = await atualizar({id, ...data});
    if (erro) {
      setMsg(erro);
    }
  }

    return (
        <>
          <Menu/>
          <h1>Perfil</h1>
          <Formulario onEnviar={onEnviar} valores={{email: usuario.email, senha: null}}/>
        </>
    );
}

export default Perfil;