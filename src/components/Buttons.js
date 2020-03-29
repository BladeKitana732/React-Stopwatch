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
            //increments the counter from state in constructor by 1; need to use setInterval; adding this.countInterval equal to setInterval to display it properly? lets see
            this.countInterval = setInterval(() => {
                this.setState({
                counter: this.state.counter + 1,
                paused: false,
            })
            //states when clicked that it is no longer paused. 
            // paused: false,
        }, 1000)
        //test to see if works
        console.log(this.countInterval);
      }

      pauseCount = () => {
        //moved functionality code of restart to here cause thats how it was acting; as a pause button. 
      
        clearInterval(this.countInterval)
      
    }    

      //going to try another JS method now
      restartCount = () => {
       clearTimeout(this.countInterval)
        
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
