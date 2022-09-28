import React, { useState } from 'react';

function Ejemplo({lang}) {
  if (lang === 'hun') {
    return (
      <form>
        <input key="lastName" type="text" placeholder="Vezetéknév" name="lastName"/>
        <input key="firstName" type="text" placeholder="Keresztnév" name="firstName"/>
        <input key="middleInitial" type="text" placeholder="KB" style={{width: 30}} name="middleInitial"/> 
      </form>
      )
  }
  return (
      <form>
        <input key="middleInitial" type="text" placeholder="MI" style={{width: 30}} name="middleInitial"/> 
        <input key="firstName" type="text" placeholder="First Name" name="firstName"/> 
        <input key="lastName" type="text" placeholder="Last Name" name="lastName"/> 
      </form>
    );
}

export default function Lang() {
  const [lang, setLang] = useState('hun');

  return <div>
    <Ejemplo lang={lang} />
    <button onClick={(e) => setLang((old) => setLang(old == 'hun' ? 'es' : 'hun'))}>Lang</button>
     </div>
}
//'es' no esta declarado, pero es como un valor por defoult resultado del if lang==='Hun'. Seria el Else, que para variar tampoco esta declarado. q culeado. igual lo entiendo jaja.
//LO IMPORTANTE ACA, es que sin las KEY, no se me mueven correctamente los imputs. Son las claves para determinar los valores correctos. Son su identificador, funcionarioan como un "id" para mantaner los valores y la estetica del formulario.
//Sin la key, al cambiar de un idioma al otro, me va a renderizar el style, pero no el valor del input, osea el "name" y el "place holder", se mueve con el NAME QUE SE IDENTIFICA CON LA KEY
//ENTONCES SE MUEVE KEY CON NAME.