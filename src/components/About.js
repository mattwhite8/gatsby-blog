import React from 'react'
import { css } from '@emotion/core'

import stellaAndI from '../img/stella.jpg'

export default () => (
    <section className="section has-background-grey-lighter has-text-centered">
        <div className="container">
            <div css={css`
                    position: relative;
                    z-index: 2;
                    margin: 0 auto -96px;
                    width: 192px;
                    height: 192px;
                    background-image: url(${stellaAndI});
                    background-size: cover;
                    border: 3px white solid;
                    border-radius: 100%;
                `}></div>
            <div className="card has-background-white-ter" css={css`
                padding-top: calc(96px + 3rem);
            `}>
                <div className="card-content has-text-centered">
                    <h1 className="title">Hello World</h1>
                    <p>First and foremost, I love to learn.</p>
                    <p>Coming from a background with no coding experience to working full time as a developer has been one of the most challenging and rewarding experiences of my life. Several years ago I never would have pictured myself writing this, let alone writing this on a website that I created. I strive every day to push myself just a little further than the last, and I know I have so much further to go. Despite that, I have learned to embrace the struggle and the endless pursuit of knowledge.</p>
                    <p>Follow me as I strive to push myself as hard physically as I have mentally. This April I will participate in the Charlotte Spartan Race -- a first for me. I will update this blog with my training routine and various thoughts and musings.</p>
                </div>
            </div>
        </div>
    </section>
)