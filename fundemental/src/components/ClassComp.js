import React, { Component } from 'react'

class ClassComp extends Component {

  render() {
    return (
      <div>
        <h1>Welcome from {this.props.name}</h1>
      </div>  
    )
  }
}

export default ClassComp;