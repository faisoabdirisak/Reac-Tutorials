import React, { Component } from 'react'
 class Message extends Component {
    constructor(){
        super()
        this.state={
            message: 'Welcome Visitor'
        }

    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    clickHandler(){
        console.log('clicked button')
    }
  render() {
    //destructuring
    const {name,  nickname}=this.props
    return (
      <div>
        <h1>Hey {name}. or {nickname}</h1>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        {/* event handling */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default Message