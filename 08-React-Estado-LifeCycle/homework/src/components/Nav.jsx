import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css'




function Nav({onSearch}) {
  return (
    <div >
        <nav class="navbar navbar-light" id='Fondo' >
        <img src={Logo} alt="logo henry" id='logoHenry'  />
          <a class="navbar-brand">Henry wheater app</a>
          <SearchBar
                  onSearch={onSearch}
                />
         </nav>
     </div>
  );
};

export default Nav;
