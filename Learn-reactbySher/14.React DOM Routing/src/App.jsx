import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>

      <Navbar/>

      {/* Routers -> use for like a container
      Router -> use for actual page router */}

{/* // Ye sirf Route Page hi change hoga iske upar ya routes bahar kuch bhi ho woo haar page par dikhai dega matlab baki koi chiz change nahi hoga  */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App