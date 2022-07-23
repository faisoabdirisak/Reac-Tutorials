import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

//   #if-else approach
//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>Welcome faska</div>
//     } else {
//       return <div>Welcome Guest</div>
//     }
//   }

  // #element-variables approach
//   render() {
//     let message
//     if (this.state.isLoggedIn) {
//       message = <div>Welcome faska</div>
//     } else {
//       message = <div>Welcome Guest</div>
//     }
//     return <div>{message}</div>
//   }

  // #ternary-operator-approach
//   render() {
//     return this.state.isLoggedIn ? (
//       <div>Welcome faska</div>
//     ) : (
//       <div>Welcome Guest</div>
//     )
//   }

  // #short-circuit-operator-approach
  render() {
    return this.state.isLoggedIn && <div>Welcome faska</div>
  }
}

export default UserGreeting
