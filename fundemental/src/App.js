import React, { Component } from 'react'
import ClassComp from './components/ClassComp';
import Greet from './components/Greet'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet/>
        <ClassComp/>
      </div>
    )
  }
}

export default App;
