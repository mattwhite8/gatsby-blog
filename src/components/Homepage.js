import React from 'react'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import './style.scss'

const Layout = ({ children }) => (
    <div>
        <Hero />
        <About />
        <Footer />
    </div>
)

export default Layout