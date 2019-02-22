import React from 'react'
import { Link } from 'gatsby'

const toggle = () => {
    const menu = document.getElementById('burger')
    const className = menu.getAttribute('class')
    if (className === 'navbar-menu') {
        menu.className = 'navbar-menu is-active'
    } else {
        menu.className = 'navbar-menu'
    }
}

export default () => (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a role="button" onClick={toggle} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="burger">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="burger" className="navbar-menu">
            <div className="navbar-start">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/posts" className="navbar-item">Posts</Link>
            </div>
        </div>
    </nav>
)
