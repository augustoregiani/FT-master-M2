
import s from  './Card.module.css';
import React from 'react';


export default function Card(props) { //
return (
  
    <div className={s.card}>
        <button onClick={()=>props.onClose()} className={`${s.btn} ${s.btnColor} `}>X</button>
        <h4 className={s.titulo}>{props.name}</h4>
      <div className={s.middleDiv}>
        <p>Max</p>
        <p>Min</p>
        <p>{props.max}</p>
        <p>{props.min}</p>
        <img className={s.imagen} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen del clima"  />
      </div>
       
    </div>
)
};
