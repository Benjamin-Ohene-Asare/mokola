import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import Searchbar from '../searchbar/Searchbar'
const Nav = () => {
     const [open, setOpen] = useState(false);
    return (
        <div className="header padding">
          
            <div className="logo">
                <h3>Mokola</h3>
            </div>

            <div className="search">
                <Searchbar />
            </div>

            <div className={`nav ${open ? "active" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="menu" onClick={() => setOpen(!open)}    >
                <div className="menu-icon" onClick={() => setOpen(!open)}   >
                      ☰
                </div>
            </div>
        </div>
    )
}

export default Nav
