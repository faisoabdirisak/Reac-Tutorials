import React, { Component } from 'react'
import ClassComp from './components/ClassComp';
import EventBind from './components/EventBind';
import Greet from './components/Greet'
import Message from './components/Message'
import ParentComponent from './components/ParentComponent';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParentComponent/>
        {/* <EventBind/> */}
        {/* <Greet name='faska'>
          <p>This is children props</p> 
        </Greet> 
        <Greet name='faiso'/> 
       <ClassComp name='faska'/> 

      <Message name='faska' nickname='faiso'/> */}

      </div>
    )
  }
}

export default App;
