import React from 'react'
import './style.scss'

const Navbar = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <p>Matt Test</p>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="burger" className="navbar-menu">
            <div className="navbar-start">
            <a className="navbar-item">
                Home
            </a>

            <a className="navbar-item">
                About
            </a>
            </div>
        </div>
    </nav>
)

export default Navbar