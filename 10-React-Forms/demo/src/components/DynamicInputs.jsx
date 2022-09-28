import React, { useState } from 'react';

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

function DinamicInputs() {  
  // const modeloFamiliar = { nombre: '' }; //modeloFmiliar--->Objeto on una propiedad Nombre, con un string vacio ' '; 

  // const [familiar, setFamiliar] = useState([ //--> Familiar, esta seteado con el estado de todo lo que este en "modeloFamiliar"
  //   { ...modeloFamiliar },
  // ]);
  // const [persona, setPersona] = useState({   //---> Persona, setea el estado de nombre ' ' - (este estado, esta adentro del estado de familiar(modelofamiliar))
  //   nombre: '',
  // });
//   const agregaFamiliar = () => {
//     setFamiliar([...familiar, { ...modeloFamiliar }]);
// };

  const [familiar, setFamiliar] = useState([  ])

  const [persona, setPersona] = useState ({ nombre: ''})

  const agregaFamiliar = () => {
      setFamiliar([...familiar, { ...persona }]);
      setPersona({ nombre : ''}) //Para vaciar el input, tengo que setear a persona respetando su estructura de OBJETO.
  };

  const handlePersonaChange = (e) => setPersona({
    ...persona,
    [e.target.name]: e.target.value, //ASIGNA DE manera dinamica, la pripiedad del objeto, y el value que le tiene que asignar a esa propiedad.
  });

  const handleFamiliarChange = (e) => {
    const familiares = [...familiar]; 
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  const handleSubmit = e => {
    e.preventDefault()
    console.log(familiar)
  }

  return (        
    <form onSubmit={handleSubmit}>            
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />  
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
      />
      {
      familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
              type="text"
              name={`nombre-${i}`}
              id={i}
              data-name="nombre"
              value={el.nombre}
              onChange={handleFamiliarChange}
          />
        </div>
      ))
      }
      <input type="submit" value="Submit" />        
    </form>   
  );
};

export default DinamicInputs;