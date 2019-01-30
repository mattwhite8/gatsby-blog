import React from 'react'
import Nav from './Navbar'
import heroImg from '../img/alone.jpg'

export default () => (
    <header className="hero is-fullheight" style={{background: `black url(${heroImg}) center / cover`}}>
        <Nav />
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title has-text-white is-size-1">
                    Becoming a Spartan
                </h1>
            </div>
        </div>
    </header>
)