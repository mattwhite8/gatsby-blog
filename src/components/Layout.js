import React from 'react'
import Navbar from './Navbar'
import './style.scss'

const Layout = ({ children }) => (
    <div className="has-background-primary">
        <Navbar />
        {children}
    </div>
)

export default Layout