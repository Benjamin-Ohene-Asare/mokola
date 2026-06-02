import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  FaBars,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa'

import './nav.css'
import Searchbar from '../searchbar/Searchbar'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="header padding">
      
      <div className="logo">
        <h3>Mokola</h3>
      </div>

      {/* CATEGORY */}

      <Link to="/category" className="category-link">
        <FaBars />
        <span>Categories</span>
      </Link>

      {/* SEARCH */}

      <div className="search">
        <Searchbar />
      </div>

      {/* OLD LINKS */}

      <div className={`nav ${open ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link>
        <Link to="/services">Services</Link> */}
        <Link to="/contact">Contact</Link>

        {/* CART */}

        <Link to="/cart" className="nav-icon-link">
          <FaShoppingCart />
          <span>Cart</span>
        </Link>

        {/* ACCOUNT */}

        <Link to="/account" className="nav-icon-link">
          <FaUser />
          <span>My account</span>
        </Link>
      </div>

      {/* MOBILE MENU */}

      <div className="menu" onClick={() => setOpen(!open)}>
        <div className="menu-icon">
          ☰
        </div>
      </div>
    </div>
  )
}

export default Nav