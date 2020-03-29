import React, { Component } from 'react'

export default class Buttons extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          counter: 0,
          paused: true
        }
      }

      startCount = () => {
        this.setState({
            //increments the counter from state in constructor by 1; need to use setInterval
            counter: setInterval(this.state.counter + 1, 5000),
            //states when clicked that it is no longer paused. 
            paused: false,
        })
        console.log(this.state.counter);
      }

      pauseCount = () => {
          this.setState({


          })
          console.log();
      }

      //going to need to use clearInterval 
      restartCount = () => {
          this.setState({


          })
          console.log();
      }

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
