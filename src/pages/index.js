import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';

import Home from '../components/Homepage'

export default () => (
    <PageTransition>
        <Home />
    </PageTransition>
)
