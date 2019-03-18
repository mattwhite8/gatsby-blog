import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
                <AniLink fade to="/"  duration={.5} className="navbar-item">Home</AniLink>
                <AniLink fade to="/posts"  duration={.5} className="navbar-item">Posts</AniLink>
            </div>
        </div>
    </nav>
)
