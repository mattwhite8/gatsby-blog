import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import './style.scss'

const Layout = ({ children }) => (
    <div>
        <Navbar />
        <Hero />
        <section className="container">
            {children}
        </section>
    </div>
)

export default Layout