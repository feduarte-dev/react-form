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
    e.target.value = (`${e.target.value}`).toUpperCase();
  }

  function specialChar(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value = (`${e.target.value}`).replace(/[^\w\s]/gi, ''));
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

  function handleCv(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCv(e.target.value);
  }

  function handleRole(e: React.ChangeEvent<HTMLInputElement>) {
    setRole(e.target.value);
  }

  function handleInfo(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    setInfo(true);
  }

  function handleDescriptionChange(e
  : React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  const clear = (e:any) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setCpf('');

    setAddress('');
    setCity('');
    setState('Acre');
    setAddressType('Casa');

    setCv('');
    setRole('');
    setDescription('');
  };

  return (
    <form>
      <fieldset>
        <label>
          Nome
          <input
            name="fullName"
            maxLength={ 40 }
            onChange={ handleName }
            type="text"
            value={ name }
            onInput={ upperCase }
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
            name="address"
            maxLength={ 200 }
            onChange={ specialChar }
            type="text"
            value={ address }
          />
        </label>
        <label>
          Cidade
          <input
            maxLength={ 28 }
            onBlur={ isNumber }
            onChange={ handleCity }
            name="city"
            type="text"
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
            {states.map((s) => (
              <option key={ s } value={ s }>{s}</option>
            ))}
          </select>
        </label>
        {/* Olhei no Gabarito */}
        <label>
          Casa
          <input
            defaultChecked={ addressType === 'Casa' }
            name="addressType"
            type="radio"
            value="Casa"
            onChange={ ChangeAddress }
          />
        </label>
        <label>
          Apartamento
          <input
            checked={ addressType === 'Apartamento' }
            name="addressType"
            type="radio"
            value="Apartamento"
            onChange={ ChangeAddress }
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Resumo do currículo
          <textarea
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
          <textarea
            name="description"
            maxLength={ 500 }
            onChange={ handleDescriptionChange }
            value={ description }
          />
        </label>
      </fieldset>
      <button type="submit" onClick={ handleInfo }>Enviar</button>
      <button onClick={ (e) => clear(e) }>Limpar</button>
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
