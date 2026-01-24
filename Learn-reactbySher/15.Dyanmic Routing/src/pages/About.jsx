import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  // useNavigate use to jump to any where on one click
  const navigate = useNavigate()

  // const btnClicked = ()=>{
  //   navigate('/') // redirect to any route
  //   navigate(-1)      // this is use to jump to just next page or just previous page
  // }

  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }} 
      className='m-5 border-2 p-4 rounded-full '>Return home page</button>
        <h1>About</h1>
    </div>
  )
}

export default About