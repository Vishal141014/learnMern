import React, {useState} from 'react'

const AdvanceUseState = () => {

    // Objects handling
    const [num, setNum] = useState({user: "Nikita", age: 22})

    const btnClicked = ()=>{
        const newNum = {...num}
        newNum.user = "Vishal"
        setNum(newNum)
    }

    // Array Handling
    const [num1, setNum1] = useState(["Vishal ", 23])

    const btnClicked1 = ()=>{
        const newNum1 = [...num1]
        newNum1.push(" Nikita ")
        newNum1.push(21)
        setNum1(newNum1)
    }

    // batch Update
    const [num2, setNum2] = useState(0)
    const batchUpdate = ()=>{

        // setNum2(num2 + 1)
        // setNum2(num2 + 1)
        // setNum2(num2 + 1)

        // Above we write three times but valuse only increase by +1 but we want value update by +3 no we need to batch update code like 

        setNum2(num2 => (num2+1))  // ese bhi kar sakte hai
        setNum2(prev => (prev+1))  // ese bhi likh sakte hai
        setNum2(prev => (prev+1))
    }

  return (
    <div>
        <h1>{num.user}, {num.age}</h1>
        <button onClick={btnClicked}>Click</button>
        <h1>{num1}</h1>
        <button onClick={btnClicked1}>Click</button>

        <h2>This is Batch Update {num2}</h2>
        <button onClick={batchUpdate}>Click Here</button>

    </div>
  )
}

export default AdvanceUseState  