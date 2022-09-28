import React from 'react';
import Card from './Card.jsx';
import sport from './Cards.module.css'


export default function Cards(props) {
 return (
  <div className={sport.contenedor}>
    {
  props.cities.map( ciudad => (
    
       <Card
          max={ciudad.main.temp_max}
          min={ciudad.main.temp_min}
          name={ciudad.name}
          img={ciudad.weather[0].icon}
          onClose={() => alert(ciudad.name)}
        />))
  }
  </div>

 )
};
 