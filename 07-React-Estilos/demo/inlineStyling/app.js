import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import Producto2 from './src/components/Producto2.jsx'

render(
<div>
<Producto title="Prueba" price={400}/>
<Producto2 title="prueba2" price= {600}/>

</div>, document.getElementById('app'))
