import React from 'react'
import add from '../component/images/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar =()=>{

    return(
<>

<nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container-fluid shadow p-2 mb-5 bg-body rounded">
    <NavLink className="navbar-brand " to="/"><img src={add} alt='...' /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  mx-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item mx-3 mx-2">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link active" aria-current="page" to="/men">Men's</NavLink>
        </li><li className="nav-item mx-3">
          <NavLink className="nav-link active" aria-current="page" to="/women">Women's</NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link active" to="/kid">Kid's</NavLink>
        </li>
        <li className="nav-item mx-3 dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/about">About Us</NavLink></li>
            <li><NavLink className="dropdown-item" to="/product">Products</NavLink></li>
            <li><NavLink className="dropdown-item" to="/singalproducts">Single Product</NavLink></li>
            <li><NavLink className="dropdown-item" to="/contact">Contact Us</NavLink></li>
          </ul>
        </li>
        <li className="nav-item mx-3 dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Features

          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/">Features Page 1</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Features Page 2</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Features Page 3</NavLink></li>

            <li><NavLink className="dropdown-item" to="/">Template Page 4</NavLink></li>
          </ul>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link active" aria-current="page" to="/explore">Explore</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


</>

    )
}
export default Navbar;