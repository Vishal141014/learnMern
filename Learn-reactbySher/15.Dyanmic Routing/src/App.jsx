import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Coursedetails from './pages/Coursedetails'
import Courses from './pages/Courses'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/courses' element={<Courses/>} />


        {/* Nested Routing for like product/men or product/wormen */}
        <Route path='/product' element={<Products/>}>
           <Route path='men' element={<Men/>} />
           <Route path='women' element={<Women/>} />yh 

        </Route>

        {/* This is route how to use dyanamic Routing  */}
        <Route path='/courses/:courseId' element={<Coursedetails/>} />

        {/* * use for if our page not avilable like 404 error  */}
        <Route path='*' element={<Notfound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App