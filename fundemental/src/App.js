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
import FragmentDemo from './advance/FragmentDemo';
import Table from './advance/Table';
import PureComp from './advance/PureComp';
import ParentComp from './advance/ParentComp';
import FocusInput from './advance/FocusInput';
import FRParentInput from './advance/FRParentInput';
import PortalDemo from './advance/PortalDemo';
import Hero from './advance/Hero';
import ErrorBoundary from './advance/ErrorBoundary';
import PostList from './http/PostList';
import PostForm from './http/PostForm';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <PostForm/>
        {/* <PostList/> */}

        {/* <Hero heroName="Batman" />
				<Hero heroName="Superman" />
				<ErrorBoundary>
					<Hero heroName="Joker" />
				</ErrorBoundary> */}
        {/* <PortalDemo/> */}
        {/* <FRParentInput/> */}
        {/* <FocusInput/> */}
        {/* <ParentComp/> */}
        {/* <FragmentDemo/> */}
        {/* <Table/> */}
        {/* <LifecycleA/> */}
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
