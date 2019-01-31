import React from 'react'
import Hero from './Hero'
import About from './About'
import './style.scss'

const Layout = ({ children }) => (
    <div>
        <Hero />
        <About />
    </div>
)

export default Layout