import React from 'react'
import heroImg from '../img/alone.jpg'

export default () => (
    <section className="hero is-fullheight-with-navbar" style={{background: `black url(${heroImg}) center / cover`}}>
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title has-text-white is-size-1">
                    Becoming a Spartan
                </h1>
            </div>
        </div>
    </section>
)