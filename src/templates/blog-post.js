import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <section className="section">
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>     
        </section>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
` 

