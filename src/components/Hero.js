import React from 'react'
import Nav from './Navbar'
import { css } from '@emotion/core'

import heroImg from '../img/alone.jpg'

export default () => (
    <header className="hero is-fullheight" css={css`
        background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(219,219,219,1) 100%), url(${heroImg}) center / cover;
    `}>
        <Nav />
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title has-text-white is-size-1">
                    Becoming a Spartan
                </h1>
            </div>
        </div>
    </header>
)