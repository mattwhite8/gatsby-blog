import React from 'react'
import Nav from './Navbar'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'

import heroImg from '../img/alone.jpg'

export default () => (
    <StaticQuery
        query={graphql`
            query {
                file (relativePath:{eq:"alone.jpg"}) {
                    childImageSharp {
                        fluid (maxWidth:1240){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <header className="hero is-fullheight" css={css`
                background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(219,219,219,1) 100%), center / cover;
            `}>
                <Nav />
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title has-text-white is-size-1">
                            Becoming a Spartan
                        </h1>
                    </div>
                </div>
                <Img fluid={data.file.childImageSharp.fluid} css={css`
                    height: 100vh;
                    width: 100vw;
                    z-index: -1;
                `} style={{
                    position: 'absolute'
                }}/>
            </header>
        )}
    />
)