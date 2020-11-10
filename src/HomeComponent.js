import React from 'react';
import Title from './Navbar';
import './App.css';

export default class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            gridHeight: 10,
            gridWidth: 10,
        };
    }

    render() {
        return (
            (<Title />),
            (
                <div>
                    <h5>Input Simulation Size:</h5>
                    <span justify="center">
                        <input type="text" value={this.state.gridHeight} />
                        x
                        <input type="text" value={this.state.gridWidth} />
                        <button>Create Simulation</button>
                    </span>
                </div>
            )
        );
    }
}
