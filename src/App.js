
import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Men from './component/Men'
import './App.css'
import Women from './component/Women'
import Kid from './component/Kid'
import Explore from './component/Explore'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './component/About'
import Futtor from './component/Futtor'
import Product from './component/Products'
import Contact from './component/Contact'
import Singalproducts from './component/Singalproducts'

const App=()=>{

  return(  <>
  
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/men" element={<Men />}/>
    <Route path="/women" element={<Women />}/>
    <Route path="/kid" element={<Kid />}/>
    <Route path="/explore" element={<Explore/>}/>
    <Route path="/about" element={<About/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/singalproducts" element={<Singalproducts/>}/>

  </Routes>
  <Futtor/>
  </BrowserRouter>
  </>)
}
export default App