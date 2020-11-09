import React from 'react';
import Title from '../Navbar';
import './App.css';

class HomeApp extends React.Component {
    constructor() {
        super();
        this.state = {
            gridHeight: null,
            gridWidth: null,
        };
    }

    render() {
        return (
            (<Title />),
            (
                <div>
                    <h5>Input Simulation Size:</h5>
                    <span text-align="center">
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

export default HomeApp;
