import React from 'react';

  export class Watch extends React.Component {
    render() {
        return (
            <div className="watch">
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }   
}