import React, { useState, useEffect,  useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  const [cero, setCero] = useState(false)

   function toggle() {
    setActivo(!activo);
    if(cero===true) setCero(false);
  }
  function reset() {
    setSegundos(0);
    setActivo(false);
    if (tipo === 'Cuenta Regresiva'){
     myRef.current.value = '';
    if(cero===true) setCero(false)}
    
  }
  function cambioTipo() {
    
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
    if(cero===true) myRef.current.value = ''; setCero(false);
    
}

useEffect(() => {
  let intervalo = null;
  if (activo && tipo === 'Contador') {
    intervalo = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);
  }
  if(activo && tipo === 'Cuenta Regresiva') {
    intervalo = setInterval(() => {
      setSegundos(segundos => segundos -1);
    }, 1000);
  }
  if(activo && tipo === 'Cuenta Regresiva' && segundos === 0 ) {
     setCero(true);
     clearInterval(intervalo);
  }

  if (!activo && segundos !== 0 && tipo === 'Contador') {
    clearInterval(intervalo);
  }
  return () => clearInterval(intervalo);
}, [activo, segundos, tipo]);


const myRef = useRef(null)

function agregaSegundos() {
  // `current` apunta al elemento de entrada de texto montado
  let ref = myRef.current.value// aca adentro va el valor del Type del imput.
  setSegundos(ref)
}

return (
  <div className="app">
    <div className="time">
      {segundos}s
    </div>
    <div>
      {cero === true && <div> <h1>EL CRONOMETRO LLEGO A CERO</h1> </div>}
    </div>
    <div className="row">
      <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>
        {activo ? 'Pausa' : 'Inicio'}
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </div>
    <button className="button" onClick={cambioTipo}>
        {tipo}
    </button>
    {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} 
    onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>}
  </div>
);
};

export default Timer;