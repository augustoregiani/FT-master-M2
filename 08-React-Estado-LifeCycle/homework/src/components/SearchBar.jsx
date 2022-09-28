import React, { useState } from "react";
import './SearchBar.modules.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')
  return (
    <div className="Fondo" >
    <form onSubmit={(e) => {
      e.preventDefault(); //Este es un metodo que se usa en los formularios, ya que por defecto el formulario me recetea la pagina, y no es lo que queremos. Por eso, le decimos que prevenga el comportamiento por defoult.
      onSearch(city);
    }}>
      <input
      className="input"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar"  className="boton"/>
    </form>
    </div>
  );
}
