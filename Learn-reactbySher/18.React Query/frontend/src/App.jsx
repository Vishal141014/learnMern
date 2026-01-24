import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [characters, setCharacters] = useState([])

  return (
    <>
    <h1>Chai aur API in react</h1>
    <h2>Number of Character are: {characters.length} </h2>
    </>
  )
}

export default App