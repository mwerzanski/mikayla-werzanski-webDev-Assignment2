import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeApp from './pages/HomeApp';
import GridApp from './pages/GridApp';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Navbar>
            <Navbar.Brand href="/">Conways Game of Life</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link to={'/pages/HomeApp'} className="nav-link">
                    Home
                </Nav.Link>
                <Nav.Link to={'/pages/GridApp'} className="nav-link">
                    Simulation
                </Nav.Link>
                {/* <Nav.Link to={'/pages/GridApp'} className="nav-link">
                    About Conways Game of Life
                </Nav.Link> */}
            </Nav>
        </Navbar>
        <Switch>
            <Route path="/" component={HomeApp} />
            <Route path="/pages/GridApp" component={GridApp} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
