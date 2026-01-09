import React from 'react'

const App = () => {

  function btnClicked() {
    console.log("Button clicked");
  }

  // const doubleClick = () => {
  //   console.log("Button 2 times clicked")
  // }

  function inputChanging(val){
    console.log(val);
  }

  return (
    <div>
      <button onClick={btnClicked}>Click Here</button>
      {/* <button onDoubleClick={doubleClick}>This is double Click Here</button> */}
      <button onDoubleClick={() => {
        console.log('Button clicked ')
      }}>This is double Click Here</button>

      {/* // When user is type or change the input use onChange  */}
      <input onChange={() => { console.log('user is typing') }} type="text" placeholder='Enter here' />

{/* when user write something on the input area use to see or print */}
      <input onChange={(elem) => { console.log(elem.target.value) }} type="text" placeholder='Enter here' />

      <input onChange={(elem) => { 
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter here' />

      <div onMouseMove={(elem)=>{
        // console.log("nachooooooo");
        console.log(elem.clientX);
        console.log(elem.clientY);
      }} className="box">
      </div>

        <div onWheel={(elem)=>{
          // console.log("page scrolling")
          console.log('page scrolling speed',elem.deltaY)
        }}>
          <div className="page1"></div>
          <div className="page2"></div>
          <div className="page3"></div>
        </div>

    </div>
  )
}

export default App