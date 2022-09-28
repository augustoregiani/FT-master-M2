import React from 'react';
import ReactDom, { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import OtroComponente from './src/components/OtroComponente.js';

ReactDom.render(
    <div>
    <Producto title="Prueba" price={400}/>
    <OtroComponente title="Otro" price={133}/>
    </div>, 
    document.getElementById('app')
    );
