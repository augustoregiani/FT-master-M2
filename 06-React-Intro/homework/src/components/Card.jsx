import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <h1>{props.name}</h1>
    <h1>Max</h1>
    <p>{props.max}</p>
    <h1>Min</h1>
    <p>{props.min}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen del clima" />
    <button>{props.onClose}X</button>
  </div>
  
};