import { useParams } from "react-router-dom";

function Perfil() {
  const { id } = useParams;

  return (
    <>
      { id == 1 
      ? <h2>Perfil do Usúario</h2>
      : <p>Nuh-uh!</p> }
    </>
  );
}

export default Perfil;