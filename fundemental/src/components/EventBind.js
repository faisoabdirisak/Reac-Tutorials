import React, { Component } from 'react'


class EventBind extends Component {
    constructor(props){
        super(props)
        this.state={
            message: 'Hello'
        }
//step3
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'GoodBye'
           
        })
       
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        {/* <button onClick={this.clickHandler.bind(this)}>Clicked</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Clicked</button> */}
        <button onClick={this.clickHandler}>Clicked</button>
      </div>
    )
  }
}

export default EventBind