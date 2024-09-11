import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao"
import {useState} from 'react';

function FormLogin (props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const efetuaLogin = (e) => {
        e.preventDefault(); 
        // Chamada ao backend
        props.navegaPara("/home");
    }

    return (
        <form onSubmit={efetuaLogin}>
            <InputEmail texto="E-mail" valor={email} mudaValor={setEmail}/>
            <InputSenha texto="Senha" valor={senha} mudaValor={setSenha}/>
            <Botao texto="Entrar"/>
        </form>
    )
}

export default FormLogin;