import React, {useState} from 'react'
import Nav from './components/Nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './components/Rout'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Homeproduct from './components/Home_products'

const App = () => {
  //Add to cart
  const [cart, setCart]= useState([])
  //Courses page products
  const [courses, setCourses]= useState(Homeproduct)
  //Shop Courses search filter
  const [search, setSearch] = useState('')
  //Courses Category filter
  const Filter= (x) =>
  {
    const catefilter= Homeproduct.filter((product)=>
    {
      return product.cat === x
    })
    setCourses(catefilter)
  }
  const allcatefilter= () =>
  {
    setCourses(Homeproduct)
  }
  // Courses search filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
  {
    alert("Please Search Something !")
    setShop(Homeproduct)
  }
  else
  {
    
      const searchfilter = Homeproduct.filter((x) => 
      {
        return x.cat === search
      })
      setShop(searchfilter)
  }
}
  
  //Add to cart
   
  
  const addtocart=(product)=>
  {
    const exist= cart.find((x) =>
    {
      return x.id=== product.id
    })
    if(exist)
    {
      alert("This product is already in cart")
    }
    else
    {
      setCart([cart, {...product, qty:1}])
     
      alert("Added to cart")
    }
    
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout setCart={setCart} cart={cart} courses={courses} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      {/* <About/> */}
      {/* <Contact/> */}
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
