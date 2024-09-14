import Conteudo from "../components/Conteudo";
import Titulo from "../components/Titulo";
import FormLogin from "./FormLogin";

function Login() {
    return (
        <Conteudo>
            <Titulo texto="Aluno Online"/>
            <FormLogin navegaPara={PaymentResponse.navegaPara}/>
        </Conteudo>
    );
}

export default Login;