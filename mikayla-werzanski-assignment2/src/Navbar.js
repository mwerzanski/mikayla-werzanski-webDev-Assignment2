import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand to="/pages/HomeApp">
                        Conways Game of Life
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link to={'/pages/HomeApp'} className="nav-link">
                            Home
                        </Nav.Link>
                        <Nav.Link to={'/pages/GridApp'} className="nav-link">
                            Simulation
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
