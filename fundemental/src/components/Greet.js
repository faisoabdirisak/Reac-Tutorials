import React from 'react'
//destructure
function Greet({name}) {
  function clickHandler(){
    console.log('button clicked')
  }
    
  return (
    <div>
        <h1>Hello {name} </h1>
        {/* event handling */}
        <button onClick={clickHandler}>Click</button>
      
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