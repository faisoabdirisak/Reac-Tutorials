import React, { Component } from 'react'
import ClassComp from './components/ClassComp';
import EventBind from './components/EventBind';
import Greet from './components/Greet'
import Message from './components/Message'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './NameList';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import './App.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './lifecycle/LifecycleA';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <LifecycleA/>
        {/* <Form/> */}
        {/* <Stylesheet primary={true} />
        <Inline />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
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
