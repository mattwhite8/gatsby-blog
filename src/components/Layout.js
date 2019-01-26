import React from 'react'
import './style.scss'

const Layout = ({ children }) => (
    <div className="has-background-primary">
        {children}
    </div>
)

export default Layout