import Icone from "./Icone";
import InputPesquisar from "./InputPesquisar";
import Titulo from "./Titulo";
import "./Cabecalho.css";

function Cabecalho() {
    return (
        <header>
            <div>
                <Icone imagem="" texto="Logo da Aplicação"></Icone>
                <Titulo texto="Aluno Online"></Titulo>
            </div>
            <div>
                <InputPesquisar />
                <Icone imagem="" texto="Icone Pesquisar"></Icone>
            </div>
        </header>
    );
}

export default Cabecalho;