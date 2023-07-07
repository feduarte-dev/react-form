import countryStates from './countryStates';

function App() {
  function upperCase(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = (`${e.target.value}`).toUpperCase();
  }
  function specialChar(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = (`${e.target.value}`).replace(/[^\w\s]/gi, '');
  }
  function isNumber(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.startsWith('2')) { e.target.value = ''; }
  }

  return (
    <form>
      <fieldset>
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
      </fieldset>
      <fieldset>
        <label>
          Endereço
          <input maxLength={ 200 } type="text" onChange={ specialChar } />
        </label>
        <label>
          Cidade
          <input maxLength={ 28 } type="text" onBlur={ isNumber } />
        </label>
        <label>
          Estado
          <select>
            {countryStates
              .map((state, index) => (
                <option
                  key={ index }
                  value={ state }
                >
                  {state}
                </option>))}
          </select>
        </label>
        <label>
          Casa
          <input type="radio" name="place" checked />
        </label>
        <label>
          Apartamento
          <input type="radio" name="place" checked />
        </label>
      </fieldset>
    </form>
  );
}

export default App;
