import { useState } from 'react';

import states from './countryStates';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Acre');
  const [addressType, setAddressType] = useState('Casa');

  const [cv, setCv] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');

  const [AlertMessage, setAlertMessage] = useState(false);

  const [info, setInfo] = useState(false);

  function upperCase(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = `${e.target.value}`.toUpperCase();
  }

  function specialChar(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress((e.target.value = `${e.target.value}`.replace(/[^\w\s]/gi, '')));
  }

  function isNumber() {
    if (/\d/g.test(city)) setCity('');
  }

  function cargoAlert() {
    if (!AlertMessage) global.alert('Preencha com cuidado esta informação.');
    setAlertMessage(true);
  }

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleCpf(e: React.ChangeEvent<HTMLInputElement>) {
    setCpf(e.target.value);
  }

  function handleCity(e: React.ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  function handleState(e: React.ChangeEvent<HTMLSelectElement>) {
    setState(e.target.value);
  }

  function ChangeAddress(e: any) {
    setAddressType(e.target.value);
  }

  function handleCv(e: React.ChangeEvent<HTMLInputElement>) {
    setCv(e.target.value);
  }

  function handleRole(e: React.ChangeEvent<HTMLInputElement>) {
    setRole(e.target.value);
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  function handleInfo(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setInfo(true);
  }

  return (
    <form>
      <fieldset>
        <label>
          Nome
          <input
            type="text"
            name="fullName"
            maxLength={ 40 }
            onInput={ upperCase }
            onChange={ handleName }
            value={ name }
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            maxLength={ 50 }
            onChange={ handleEmail }
            value={ email }
          />
        </label>
        <label>
          CPF
          <input
            type="text"
            name="CPF"
            maxLength={ 11 }
            onChange={ handleCpf }
            value={ cpf }
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Endereço
          <input
            type="text"
            name="address"
            maxLength={ 200 }
            onChange={ specialChar }
            value={ address }
          />
        </label>
        <label>
          Cidade
          <input
            type="text"
            name="city"
            maxLength={ 28 }
            onBlur={ isNumber }
            onChange={ handleCity }
            value={ city }
          />
        </label>
        <label>
          Estado
          <select
            name="state"
            onChange={ (event) => handleState(event) }
            value={ state }
          >
            {states.map((estado) => (
              <option key={ estado } value={ estado }>
                {estado}
              </option>
            ))}
          </select>
        </label>
        {/* Olhei no gabarito */}
        <label>
          Casa
          <input
            type="radio"
            name="addressType"
            checked={ addressType === "Casa" }
            onClick={ ChangeAddress }
            value="Casa"
          />
        </label>
        <label>
          Apartamento
          <input
            type="radio"
            name="addressType"
            checked={ addressType === "Apartamento" }
            onClick={ ChangeAddress }
            value="Apartamento"
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Resumo do currículo
          <input
            type="text"
            name="cv"
            maxLength={ 1000 }
            onChange={ handleCv }
            value={ cv }
          />
        </label>
        <label>
          Cargo
          <input
            type="text"
            name="role"
            maxLength={ 40 }
            onChange={ handleRole }
            onMouseEnter={ cargoAlert }
            value={ role }
          />
        </label>
        <label>
          Descrição do cargo
          <input
            type="text"
            name="description"
            maxLength={ 500 }
            onChange={ handleDescriptionChange }
            value={ description }
          />
        </label>
      </fieldset>
      <button type="submit" onClick={ handleInfo }>
        Enviar
      </button>
      {info && (
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{cpf}</p>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{addressType}</p>
          <p>{cv}</p>
          <p>{role}</p>
          <p>{description}</p>
        </div>
      )}
    </form>
  );
}
export default App;
