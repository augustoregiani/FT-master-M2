import React from 'react';

class Uncontrolled extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const username = document.querySelector('input[name=username]').value; //aca se esta guardando en una constante el input que recibe
    const password = document.querySelector('input[name=password]').value; //aca tambien, y seria la contraseña
    console.log(username, password); //consologea ambas constantes.
  }
  //hundleSubmit es una funcion manejadora del evento. La misma recibe el evento por parametro, por que yo lo estoy determinando en un evento dentro
  // del Tag.  que es el evento Onsubmit.
  //Siempre que trabeje en React, tengo que recordar que un SUBMIT, por defecto refresca la pagina, por lo que tengo que hacer un "preventDefault"
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" placeholder="username ej: toni@gmail.com" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" />
      </form>
    );
  }
}
//Este tipo de cosas no controladas, me dan indicaciones, pero permiten al usuario poner cualquier cosa. pOR ESO PASA AL FOMRULARIO DEL MODULO
//CONTROLLED.JSX
export default Uncontrolled;