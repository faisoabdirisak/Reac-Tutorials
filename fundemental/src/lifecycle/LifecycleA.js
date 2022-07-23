import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Faska'
      }
      console.log('life cycle A')
    }
    static getDerivedStateFromProps(props, state){
        console.log('Life cycleA getderivedstate')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}
   
    changeState=()=>{
        this.setState({
            name: 'salma'
        })
    }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
     LifecycleA
     <button onClick={this.changeState}>Change State</button>
     <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA