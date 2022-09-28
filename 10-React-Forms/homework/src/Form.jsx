import { convertErrorToString } from '@11ty/eleventy/src/EleventyErrorUtil';
import React, { useState } from 'react';


export function validate(input) {                 //la funcion validar, va a recibir un input
  let errors = {};                                //define un objeto de errores
  if (!input.username) {                         //Entonces, si no hay nada en el inpu.username
    errors.username = 'Username is required';     // entonces a Errors, seteale el strings 'Username is requerired'
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {  //--> Aca define cuales son los caractes que tiene que tener el usuario REQUERIDO en el error anterior.
    errors.username = 'Username is invalid'; 
           //--> si la condicion  !/\S+@\S+\.\S+/.test, no se cumple. es que el username es invalido. 
  }
  if (!input.password){
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid'
  }
  if (!input.edad ) {                         
    errors.edad = 'edad is required';     
  } else if (input.edad < 18) {
    errors.edad = 'debes ser mayor de edad'
  }
 

  return errors;
};


export default function  Form() {
  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')
  const [input, setInput] = React.useState ({   //Creamos 1 solo estado, que sea un objeto
    username: "",                               //ahora en su interior ponemos cada uno de los inputs a los cuales les vamos a estar haciendo
    password: "",  
    edad: "",
    ciudad:"",
    pais:"",                             //seguimiento, que sus propiedades en un inicio arranclan en blanco, osea string vacio.
  })


  const [errors, setErrors] = React.useState({});

  const handleInputsChange = function(e) { //esta funcion es la que me lee todos los imputs. Dado que cree un solo estado general para todos   
   
   setInput({
      ...input,  //me trae todo lo que haya en el input, esta copia la tengo que hacer SI O SI, para no pisar TODAS las propiedades del objeto. (Si lo sacas y miras los componentes y escribis en ambos vas a ver los valores que tienen sus estados. Escribe uno y borra el otro. no los mantiene.)
      [e.target.name]: e.target.value  //e.target.name--> busca la propiedad en donde el target tenga el valor del  nombre del target ossea (Username)
    });                               // y dentro de ese espacio para ussername agregale el valor que acaban de escribir en el input (e.target.value)
                                      
 //         [e.target.name] => puede ser "username" o "password", ambas propiedades de estado del objeto input.
 //          e.target.value => SI escribio en el input de "Username" ---> 'augusto regiani', metelecelo como stado a ussername. Entonces ahora:
 
      //                   //   const [input, setInput] = React.useState ({
                            //   username: "augusto regiani",
                            //   password: "",
                            // })  


    setErrors(validate({    //esta funcion lo que hace es, todo el timepo siempre que haya cambios, llama a "Validate" y envia los inputs para comprobar si hay o no hay error
      ...input,             //otra vez, hago una copia del objeto anterior que tenia, en la medida que le agrego cosas, el input se va modificando
      [e.target.name] : e.target.value, //
    }))

  } 

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(errors.edad){
      return alert('Tienes que ser mayor de edad, avisa cuando cumplas 18 pa')
    }
    if(errors.password){
      return alert('Pone bien el password pa, teine que tener Mayuscula, Minuscula, numeros y al menos 1 caracter especial. Si re complejo pero te RE CABIO')
    }
    if(errors.username){
      return alert('Pone bien tu email forro, no ves el recuadro rojo en el input? forro')}
    // }     ESTA ERA UNA FORMA DE HACERLO CON ALERTS, PEROP VAMOS A HACERLO CON UN <P> EN LA TAG IMPUT
    alert(`Usuario: ${input.username} ,
      Contraseña: ${input.password} , 
      ciudad: ${input.ciudad} ,
      Edad: ${input.ciudad} , 
      Pais: ${input.pais} 
      fueron enviados correctamente`)
    setInput({
      ...input,
      username: "",                               //ahora en su interior ponemos cada uno de los inputs a los cuales les vamos a estar haciendo
      password: "",
      edad: "",
      ciudad:"",
      pais:"",  
    });
  }

  return (
    // // cuando se presione el onSubmit (boton de abajo) que me cargue la data
    <form onSubmit={handleSubmit}>  
    <div>
      <label>Username:</label>
       <input className={errors.username && 'danger'} type="text" name="username" onChange={handleInputsChange} value={input.username} /> {/*en value mi input esta siendo  escuchado atraves de  name"username" */}
           {/*  --> si existen errores, asigna la clase denger (que es el recudro en rojo (CSSS)) */}
           {errors.username && (<p className='danger'>{errors.username} </p>)}
    </div> 
    <p/>
    <div>
      <label>Password:</label>
      <input className={errors.password && 'danger'}  type="password" name="password" onChange={handleInputsChange} value={input.password} />
      {errors.password && (<p className='danger'>{errors.password}</p>)}
    </div>
    <div>
      <label>Edad:</label>
      <input className={errors.edad && 'danger'} type="number" name="edad" onChange={handleInputsChange} value={input.edad} />
      {errors.edad && (<p className='danger'>{errors.edad}</p>)}
    </div>
    <div>
      <label>Ciudad:</label>
      <input className={errors.ciudad && 'danger'} type="text" name="ciudad" onChange={handleInputsChange} value={input.ciudad} />
    </div>
    <div>
      <label>Pais:</label>
      <input className={errors.pais && 'danger'} type="text" name="pais" onChange={handleInputsChange} value={input.pais} />
    </div>
    <div>
      <input type="submit" value="Enviar" />
    </div>
  </form>
  )
}
