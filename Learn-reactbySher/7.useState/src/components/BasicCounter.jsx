import React, { useState } from 'react'

const BasicCounter = () => {
    const [num, setNum] = useState(0)

    function increase(){
        setNum(num + 1);
    }

    function decrease(){
      if(num > 0){
        setNum(num - 1);
      }else{
        alert('Number must be greater than 0');
      }
    }

  return (
    <div>
        <h1>On Button Click You see a Magic 🤗</h1>
      <h2>The Value of Initialy is</h2>
      <h2 id='num'>{num}</h2>
      <button onClick={increase}>Click Here 🥺</button>
      <button onClick={decrease}>Click Here ☹️</button>
    </div>
  )
}

export default BasicCounter