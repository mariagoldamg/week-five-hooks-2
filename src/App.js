import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import './App.css';

function App (){

  const [coding, setCoding] = useState ('JavaScript'); 

  const updateData =()=>{
    
    if (coding==='JavaScript'){
      setCoding ('React')
    }
    
 else {setCoding ('JavaScript')}
  }

  return(
    <div>
<h1>I Love {coding}</h1>
<button onClick={updateData}>Click Here</button>
    </div>
  )
}


/*function App() {

  const [number, setNumber] = useState (100);

  const changeNumber = () =>{
    setNumber(number -5);
  }

  return (
    <div >
      <p>{number}</p>
      <button onClick ={changeNumber}> Cick here</button>
    </div>
  );
}*/

/*class App extends Component{

  state = {
    number:100
  }

  render(){
    return(
      <div>
        <p> {this.state.number}</p>
        <button onClick= {() => this.setState({number: this.state.number-5})}> Click here! </button>
      </div>
    )
  }
}
*/
export default App;
