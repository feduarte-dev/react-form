function personal() {
  function upperCase(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = (`${e.target.value}`).toUpperCase();
  }
  return (
    <fieldset>
      <label>
        Nome
        <input type="text" maxLength={ 40 } onInput={ upperCase } />
      </label>
      <label>
        Email
        <input type="email" maxLength={ 50 } />
      </label>
      <label>
        CPF
        <input type="text" maxLength={ 11 } />
      </label>
    </fieldset>
  );
}
export default personal;
