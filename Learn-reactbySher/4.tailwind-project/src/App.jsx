import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661629259850-9a893425f1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnVkZXxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1711609634410-c6c8dbef76ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bnVkZXxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'seagreen',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1683134434267-cfadb4c46db9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
      intro:'',
      color:'pink',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1713483864166-d771b5be2e62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8',
      intro:'',
      color:'yellow',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1664442990699-78ecb5ba5ee9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8',
      intro:'',
      color:'yellow',
      tag:'Underbanked'
    }
  ]

  return (
    <div>
      <Section1 users = {users}/>
      <Section2/>
    </div>
  )
}

export default App    