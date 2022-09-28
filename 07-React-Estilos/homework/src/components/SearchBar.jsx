import React from 'react';
import StylesSSJ from './searchBar.module.css'


export default function SearchBar(props) {
  // acá va tu código
  return (<div className={StylesSSJ.container1}>
    <div className={StylesSSJ.container}>
    <input type="text"  placeholder='Ciudad...'/>
    <button onClick={()=>props.onSearch(`buscando la CIUDAD Y A LA BOSTA}`)} className={StylesSSJ.btn}>Agregar</button>
  </div>
  </div>)
};

