import React from 'react'
import Nav from '../components/Navbar'
import { graphql } from 'gatsby'

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <header>
                <section className="hero is-medium is-light is-bold">
                    <div className="hero-head">
                        <Nav />
                    </div>
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                My Posts
                            </h1>
                        </div>
                    </div>
                </section>
            </header>
            <section className="section">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>     
            </section>
        </div>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
` 

