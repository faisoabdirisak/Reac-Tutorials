import React, { Component } from 'react'
import ClassComp from './components/ClassComp';
import Greet from './components/Greet'
import Message from './components/Message'
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Greet name='faska'>
          <p>This is children props</p> 
        </Greet> */}
       <Greet name='faiso'/>
      {/* <ClassComp name='faska'/> */}

      <Message name='faska' nickname='faiso'/>

      </div>
    )
  }
}

export default App;
