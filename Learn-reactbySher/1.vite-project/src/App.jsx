import React from 'react'
import Card from './components/Card'
import CardWithPrep from './components/CardWithPrep'

const App = () => {
  return (
    <div className='parent'>
      <Card/>
      <CardWithPrep userName = "Nikita" data = "hi I'm nikita"/>
      <CardWithPrep userName = "Priya" data = "hi I'm Priya"/>
      <CardWithPrep userName = "Ansh" data = "hi I'm Ansh"/>
    </div>
  )
}

export default App