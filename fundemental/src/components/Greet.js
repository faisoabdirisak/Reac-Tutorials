import React from 'react'

function Greet(props) {
    console.log(props.name)
  return (
    <div>
        <h1>Hello {props.name} </h1>
        {props.children}
    </div>
  )

//without jsx
// return React.createElement(
//     'div',
//      {id: 'hello', className:'faska'},
//       React.createElement('h1', null, 'faska'))
}
// const Greet =()=> <h1>Hello Faiso</h1>

export default Greet