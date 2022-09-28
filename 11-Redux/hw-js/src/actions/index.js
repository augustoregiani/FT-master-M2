const { INCREMENTO, DECREMENTO, INPAR, ASYNC } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).



const incremento = function () {       //
  return {                       //   la funcion que genera la ACCION, me retorna
          type: INCREMENTO,        //  un action con un "type" y un "payload" 
          payload: 1         //  
        }                        //   type me indica el tipo de accion que es. Type: ADD_TODO
    }                            //   y el payload lo que es (?) un texto
                                 //
const decremento= function() { 
      return {                    //
        type: DECREMENTO,        //
        payload: 1        //
      }
    }

const inpar= function() { 
      return {                    //
        type: INPAR,        //
        payload: 3        //
      }
    }


module.exports = {
  incremento,
  decremento,
  inpar,
  async,
}