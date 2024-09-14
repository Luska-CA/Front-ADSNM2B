function InputEmail(props) {
    return (
        <>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" name="email"  value={props.email} onChange={props.mudaValor} required/>
        </>
    );
}

export default InputEmail;