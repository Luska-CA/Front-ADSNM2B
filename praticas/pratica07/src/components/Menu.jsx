import { NavLink } from "react-router-dom";

function Menu() {
  const opcoes = [
    { rota: "/home", texto: "Home" },
    { rota: "/perfil", texto: "Perfil" },
    { rota: "/", texto: "Sair" },
  ];
  return (
    <>
      <nav>
        <ul>
          {opcoes.map((opcao, index) => (
            <li key={index}>
              <NavLink to={opcao.rota}>{opcao.texto}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Menu;