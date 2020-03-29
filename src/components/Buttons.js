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
            counter: setInterval(this.state.counter + 1, 1000),
            //states when clicked that it is no longer paused. 
            paused: false,
        })
        //test to see if works
        console.log(this.state.counter);
      }

      pauseCount = () => {
          //needs if/else statement to pause at current counter but continue on from that point if clicked again
          this.setState({


          })
          //test to see if works
          console.log();
      }

      //going to need to use clearInterval 
      restartCount = () => {
          this.setState({


          })
          //test to see if works
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
