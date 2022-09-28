import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import Product2 from './src/components/Product2.jsx';
import './src/global.gcss';

render(
<div>
<Producto title="Prueba" price={400}/>, 
<Product2 title= "Prueba2" price= {900}/>
</div>,
document.getElementById('app'));
