import React, { useContext } from 'react'
import { ThemeDataChange } from '../context/ThemeContext'

// const Nav2 = (props) => {
const Nav2 = () => {

  // const data = useContext(ThemeDataChange)          // also we write like destructure

  const [theme, setTheme] = useContext(ThemeDataChange)


  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>

        {/* This is use by PROPS drilling theme={theme} */}
        {/* <h4>{props.theme}</h4> */}
        <h4>{theme}</h4>
    </div>
  )
}

export default Nav2