import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function validateUser(value) {                                  //.test=> es un metodo que otorgan las expreciones REGULARES (leer abajo de too) que me corrobora que todo mateche segun lo solicitado
    if(!/\S+@\S+\.\S+/.test(value)) {    //Entonces: aca evaluo que todos los caracteres que mete el usuario en el imput sean los requeridos
      setError('el usuario tiene que ser un email'); // Si no lo son, cambio el estado de error con Set Error, y le retorno ese string
    } else {
      setError(''); //Si todo esta bien, dejo el ESTADO de error en '' vacio, osea, no hay tal mensaje de error, Osea set error no hace nada.
    }               //medio que esta medio al pedo ese else. pero buen.Le mentemo igual
    setUsername(value);  //Por ultimo, si todo funco joya, seteo el usuario con el valor objetino (sera lo envio? posiblemente.)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(username, password)
    setUsername('') //seteo al estado en vacio
    setPassword('') //setea la contraseña en vacio
  }
  return (
        <form onSubmit={'handleSubmit'}>
        <input 
           className={error && 'danger'}
           name="username"
           value={username}
           placeholder="username" 
           onChange={(e) => validateUser(e.target.value)}/>

        {!error ? null : <span>{error}</span>}   {/* ACA lo que pido es que, si no hay error, no me muestre nada. Set ERROR, era lo que cambiaba el 
                                                   estado de ERROR ---> const [error, setError] = useState('')  */}

         <input name="password"
                value={password}  // {/*Es muy posible que siempre tenga muchos inputs, por lo que es MUY IMPORTANTE, lugar cada input, con si correspondiente ESTADO que como vimos arriba y en este caso, es el valor de pasword ---> const [password, setPassword] = useState(''); dddd*/}
                placeholder="password" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}/> {/*ESte SetPassword es la que me controla el estado, determinado por el password*/}
       
       
       <input type="submit" disabled= { !username || !password || error? true : false}  />    {/*//este es el boton de enviar, le voy a agregar un  disabled y un operador ternario (if) para que se desahbilite si hay errores en los imputs de email, y contraseña, para que no pueda enviarse la info, osea hacerse el SUBMIT. */}
      </form>                          //aca arriba le pregunto 2 cosas, tengo nombre de usuario? tengo error? si algo de eso esta mal, no me hablities el boton
    );
}
//if(!/\S+@\S+\.\S+/.test(value)) Esto es una exprecion regular, osea que es predeterminada para captar ciertos caracteres ante el EVENTO OnChange
//que es el que captura lo que escribe el usuario en el imput.
//Controla basicamente, cosas como , que tenga 3 letras, despues un @ despues un nose quee... se puede buscar en google pa