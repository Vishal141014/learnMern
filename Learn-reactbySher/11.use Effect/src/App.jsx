import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  // Ye hai aam jindagi
  // function random(){
  //   const ran = Math.floor((Math.random())*10)
  //   console.log(ran)
  // }

  // Ye hai mentos Use Effect jindagi
  // _____________________________________
  // Yaha use Effect use ho raha hai without dependencie
  // useEffect(function(){
  //   console.log('Use Effect is running-----')
  // })
  // __________________________________________
  // Yaha par use Effect with dependencie array hai
  useEffect(function(){
    console.log('Use Effect is running-----')
  }, [num2]) // yaha par hamne num2 pass kar diya hai iska matlab num2 iss useEffect function ki dependencie ban chuki hai iska matlab, jab jab num2 chalega tab tab hi use Effect chalega




  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>

      <button 
      onClick={() => {
        setNum(num+1)
      }} 
      onDoubleClick={()=>{
        setNum2(num2+5)
      }}
      >Click Here</button>
    </div>
  )
}

export default App