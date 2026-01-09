import React, { useState } from 'react'

const UnderStandUseState = () => {

    // let a = 20;
    // function changeA(){
    //   return a = 30;
    // }

    const [a, setA] = useState(10)
    const [userName, setUsername] = useState('Vishal')
    const [userArray, setUserarray] = useState(["Nikita ", ["Vishal"]])

    function changeA_UseState() {
        setA(50);
        setUsername("Nikita");
        setUserarray(["VISHAL ", "NIKITA"])
    }
    return (
        <div>
            <h1>The Value of A = {a}</h1>
            <h1>The Value of user = {userName}</h1>
            <h1>The Values of user = {userArray}</h1>
            {/* <button onClick={changeA}>Click here for change</button> */}
            <button onClick={changeA_UseState}>Click here for change</button>
        </div>
    )
}

export default UnderStandUseState