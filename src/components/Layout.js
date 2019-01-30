import React from 'react'
import Hero from './Hero'
import './style.scss'

const Layout = ({ children }) => (
    <div>
        <Hero />
        {children}
    </div>
)

export default Layout