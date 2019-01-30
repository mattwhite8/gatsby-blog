import React from 'react'
import logo from '../img/spartan_logo.png'

export default () => (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="#">
                <img src={logo} style={{marginBottom: 0}} alt="spartan race placeholder logo" />
            </a>
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
