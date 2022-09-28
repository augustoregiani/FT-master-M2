import React from 'react';
import { render } from 'react-dom';
import Form from './src/components/Controlled.jsx';
import Uncontrolled from './src/components/Uncontrolled.jsx';
import Ejemplo from './src/components/Ejemplo.jsx';
import DynamicInputs from './src/components/DynamicInputs.jsx';

render(<div>
  <h1>No Controlado</h1>
    <Uncontrolled/>
    <hr/>
    <h1>Controlado</h1>
    <Form/>
  </div>, document.getElementById('app'));
