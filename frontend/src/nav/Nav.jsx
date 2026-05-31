import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
    return (
        <div className="header">
            <div className="logo">
                <h3>Mokola</h3>
            </div>
            <div className='nav'>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Nav
