import React, { use, useContext } from 'react'
import { ThemeDataChange } from '../context/ThemeContext'

const Button = () => {
    
const [theme, setTheme] = useContext(ThemeDataChange)

const changeTheme = () => {
    setTheme('dark')
}

  return (
    <div>
        <button onClick={changeTheme}>Change Theme {theme}</button>
    </div>
  )
}

export default Button