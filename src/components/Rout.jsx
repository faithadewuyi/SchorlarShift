import React from 'react'
import {Routes, Route} from 'react-router';
import Home from './Home';
import Courses from './Courses';
import Cart from './Cart';
import Contact from './Contact';
import About from './About';
const Rout = ({courses, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/courses' element={<Courses courses={courses} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes> 
    </>
  )
}

export default Rout
