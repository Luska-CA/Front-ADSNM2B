import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import Section from "../components/Section";
import "../components/Home.css"

function Home(){
    return(
        <>
            <Cabecalho></Cabecalho>
            <Conteudo>
                <Menu/>
                <Section texto="Página Inicial">
                    <div estilo="card-grid">
                        <Painel texto="Mural de Avisos" itens={["Inscrições para Cusros de Extensão", "Evento Maratona de Programação", "Palestra sobre Inteligência Artificial"]}/>
                        <Painel texto="Agenda Acadêmica" itens={["Semana de Provas P1", "Entrega de Trabalhos", "Apresentação TCC"]}/>
                        <Painel texto="Histórico de Notas" itens={["Lógica - 10", "Banco de Dados - 7.5", "Governança - 8.4"]}/>
                    </div>
                </Section>
            </Conteudo>
        </>
    );
}

export default Home;