import React from 'react'

function Greet() {
//   return (
//     <div>Greet</div>
//   )

//without jsx
return React.createElement(
    'div',
     {id: 'hello', className:'faska'},
      React.createElement('h1', null, 'faska'))
}
// const Greet =()=> <h1>Hello Faiso</h1>

export default Greet