import React from 'react'
import Nav2 from './Nav2'
import { ThemeDataChange } from '../context/ThemeContext'
import { useContext } from 'react'

// const Navbar = (props) => {
const Navbar = () => {

    // const data = useContext(ThemeDataContext)

    // console.log(data)

    const [theme] = useContext(ThemeDataChange)

  return (
    <div className={theme}>

{/* Here using context as globally */}
        {/* <h2>{data}</h2> */}

        <h2>Sheriyans</h2>

        {/* This is use by PROPS drilling theme={theme} */}
        {/* <Nav2 theme ={props.theme}/> */}

        <Nav2 />
    </div>
  )
}

export default Navbar