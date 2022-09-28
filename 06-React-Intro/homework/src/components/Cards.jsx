import React from 'react';
import Card from './Card.jsx'

export default function Cards(props) {
                              // cities => {data} => app, ya tiene el modelo de como armar cities
  return    (     
  props.cities.map( ciudad  => 
   <div>
    <Card
          max={ciudad.main.temp_max}
          min={ciudad.main.temp_min}
          name={ciudad.name}
          img={ciudad.weather[0].icon}
          onClose={() => alert(ciudad.name)}
          key = {ciudad.id}
        />

</div>))
};