import countryStates from '../countryStates';

function Adress() {
  function specialChar(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = (`${e.target.value}`).replace(/[^\w\s]/gi, '');
  }

  function isNumber(e: React.ChangeEvent<HTMLInputElement>) {
    if (/\D/g.test(e.target.value)) { e.target.value = ''; }
  }
  return (
    <fieldset>
      <label>
        Endereço
        <input type="text" maxLength={ 200 } onChange={ specialChar } />
      </label>
      <label>
        Cidade
        <input type="text" maxLength={ 28 } onBlur={ isNumber } />
      </label>
      <label>
        Estado
        <select name="">
          {countryStates.map((state) => (
            <option
              value={ state }
              key={ state }
            >
              {state}
            </option>))}
        </select>
      </label>
      <label>
        Casa
        <input type="radio" name="placeType" defaultChecked />
      </label>
      <label>
        Apartamento
        <input type="radio" name="placeType" />
      </label>
    </fieldset>
  );
}
export default Adress;
