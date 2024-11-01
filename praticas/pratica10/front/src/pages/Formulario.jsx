import InputTelefone from "../components/InputTelefone";

function Formulario(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: props.valores });

  return (
    <form onSubmit={handleSubmit(props.trataEnviar)}>
      <InputTelefone register={register} error={errors.telefone} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Formulario;
