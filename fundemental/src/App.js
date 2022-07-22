import React, { Component } from 'react'
import ClassComp from './components/ClassComp';
import Greet from './components/Greet'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet name='faska'>
          <p>This is children props</p> 
        </Greet>
       <Greet name='faiso'/>
      <ClassComp name='faska'/>

      </div>
    )
  }
}

export default App;
