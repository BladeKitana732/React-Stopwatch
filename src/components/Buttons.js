import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>

                <button onClick= {this.startCount}>Start</button>
                <button onClick= {this.pauseCount}>Pause</button>
                <button onClick= {this.restartCount}>Restart</button>
            </div>
        )
    }
}
