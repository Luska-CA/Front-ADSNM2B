import "./Input.css"

function InputSenha() {
    return (
        <>
            <label htmlFor="senha" required>Senha</label>
            <input type="password" id="senha" name="senha" required/>
        </>
    );
}

export default InputSenha;