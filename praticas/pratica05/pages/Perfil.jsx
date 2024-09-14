import Botao from "../components/Botao";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Menu from "../components/Menu";
import Section from "../components/Section";

function Perfil() {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Conteudo>
                <Menu/>
                <Section texto="Perfil do Usuário">
                    <InputEmail/>
                    <InputSenha/>
                    <Botao texto="Salvar"/>
                </Section>
            </Conteudo>
        </>
    );
}

export default Perfil;