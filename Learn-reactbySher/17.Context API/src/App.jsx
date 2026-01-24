import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'

const App = () => {

  // After use themeContextData we don't need this useState so we will comment this 
  // const [theme, setTheme] = useState('light')



  return (
    <div>
      {/* This is use by PROPS drilling theme={theme} */}
      {/* <Navbar theme={theme}/> */}

      <Navbar/>
      <Button/>
    </div>
  )
}

export default App