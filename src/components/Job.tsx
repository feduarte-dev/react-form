import { useState } from 'react';
import FormStateType from '../types';

function Job() {
  const [Message, setMessage] = useState(false);

  function cargoAlert() {
    if (!Message) global.alert('Preencha com cuidado esta informação.');
    setMessage(true);
  }
  return (
    <fieldset>
      <label>
        Resumo do currículo
        <input type="text" maxLength={ 1000 } />
      </label>
      <label>
        Cargo
        <input type="text" maxLength={ 40 } onMouseEnter={ cargoAlert } />
      </label>
      <label>
        Descrição do cargo
        <input type="text" maxLength={ 500 } />
      </label>
    </fieldset>
  );
}

export default Job;
