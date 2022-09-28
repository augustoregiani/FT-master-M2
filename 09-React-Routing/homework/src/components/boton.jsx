import React from 'react';
import {Route} from 'react-router-dom'
import Nav from './Nav';

export default function Boton (onSearch){
    <Route
    path='/'
    render={() => <Nav onSearch={onSearch} />}
       />
}