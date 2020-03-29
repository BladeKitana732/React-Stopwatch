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
        }, 1000)
        //test to see if works
        console.log(this.countInterval);
      }

      pauseCount = () => {
        if (this.state.paused === false) {
            this.setState({
                paused: true
            })
            clearInterval(this.countInterval)
    }   else {
        this.setState({
            paused: false
        })
        setInterval(this.countInterval)
    }
}

      //going to try another JS method now
      restartCount = () => {
          this.setState({
              counter: 0,
              paused: true
          })
       clearTimeout(this.countInterval)
        
      }
     

    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
              <div className='btn-grid'>  
                <button className='button' onClick= {this.startCount}>Start</button>
                <button className='button' onClick= {this.pauseCount}>Pause</button>
                <button className='button' onClick= {this.restartCount}>Restart</button>
              </div>  
            </div>
        )
    }
}