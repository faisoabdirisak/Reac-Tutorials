import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Faska'
      }
      console.log('life cycle B')
    }
    static getDerivedStateFromProps(props, state){
        console.log('Life cycleB getderivedstate')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
            return true
        }
    
        getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
        }
    
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('LifecycleB componentDidUpdate')
        }
    
  render() {
    console.log('LifecycleB render')
    return (
      <div>
     LifecycleB
      </div>
    )
  }
}

export default LifecycleB