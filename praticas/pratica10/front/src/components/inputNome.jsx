function InputNome(props) {
  const regras = {
    required: "Nome é obrigarório",
  };
  return (
    <>
      <label htmlFor="nome">Nome</label>
      <input type="text" {...props.register("nome", regras)}></input>
      {props.error && <p>{props.error.message}</p>}
    </>
  );
}

export default InputNome;
