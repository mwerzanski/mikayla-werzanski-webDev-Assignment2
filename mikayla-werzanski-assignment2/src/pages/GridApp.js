import React from 'react';

export default class GridApp extends React.Component {
    constructor() {
        super();
        this.state = {
            on: true,
        };
    }

    render() {
        const row = [false, true, false, true];
        return (
            <span>
                <OnOff></OnOff>
                {row.map(function (cell) {
                    console.log(cell);
                    // eslint-disable-next-line react/jsx-key
                    return <div>test</div>;
                })}
            </span>
        );
    }
}

function onOffStyle(color) {
    return {
        backgroundColor: color,
        height: '50px',
        width: '50px',
        border: '5px grey solid',
    };
}

class OnOff extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        console.log(this.props.onState);
        let backgroundColor = 'white';
        // eslint-disable-next-line react/prop-types
        if (this.props.onState) {
            backgroundColor = 'black';
        }
        return <div style={onOffStyle(backgroundColor)}></div>;
    }
}
