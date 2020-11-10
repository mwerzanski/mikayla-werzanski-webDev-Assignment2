import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import SimulationComponent from './SimulationComponent';
import NavbarComponent from './Navbar';

ReactDOM.render(
    <BrowserRouter>
        <NavbarComponent />
        <Route exact path="/" component={HomeComponent} />
        <Route path="/SimulationComponent" component={SimulationComponent} />
    </BrowserRouter>,
    document.getElementById('root')
);
