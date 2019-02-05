import React from 'react'
import Nav from './Navbar'

export default () => (
    <header>
        <section className="hero is-medium is-light is-bold">
            <div className="hero-head">
                <Nav />
            </div>
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        My Posts
                    </h1>
                </div>
            </div>
        </section>
    </header>
)
