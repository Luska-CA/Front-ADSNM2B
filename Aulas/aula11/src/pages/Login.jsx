import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { login, msg } = useContext(AuthContext);

  return (
    <>
      <h1>Login</h1>
      {msg && <p>{msg}</p>}
      <button
        onClick={(e) => login({ email: "jose@iesb.br", senha: "abcd1234" })}>Entrar
      </button>

      <Link to="/registrar">Cadastrar</Link>
    </>
  );
}

export default Login;
