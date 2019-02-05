import React from 'react'
import Hero from './IndexHero'

import './style.scss'

export default ({ children }) => (
    <div>
        <Hero />
        {children}
    </div>
)