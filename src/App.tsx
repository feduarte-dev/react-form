function App() {
  function upperCase(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = (`${e.target.value}`).toUpperCase();
  }

  return (
    <form>
      <label>
        Nome
        <input
          maxLength={ 40 }
          type="text"
          onInput={ upperCase }
        />
      </label>
      <label>
        Email
        <input maxLength={ 50 } type="email" />
      </label>
      <label>
        CPF
        <input maxLength={ 11 } type="text" />
      </label>
    </form>
  );
}

export default App;
