////making a stopwatch 

//need to section off parent component with child components 

//need 3 buttons: restart, start, pause 

//each button needs their own function to run when clicked on (needs onClick to run proper function we make for designated button)

//pseudo for app.js file 
<div> parent container of all below  
    
    <h1>Count: number incrementing for user to see time increase</h1>

  <div>container to hold button children. This div is also a child comp of main div above 
  {/* buttons will need a className to link onclick functions from component files with their designated functions. right? */}
    <button>Restart</button>
    <button>Start</button>
    <button>Pause</button>
 
  </div>  
</div>

//need two properties in state of time accumulated and a boolean if it is paused or not paused 

//example 
state = {
    paused: 'true' || 'false',
    seconds: 0 //this will increment when user presses start w/in code and on webpage
}

//all needs to be rendered under one file?? 