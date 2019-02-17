import React from 'react'
import Page from '../components/IndexPage'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
    console.log(data.allMarkdownRemark)
    const nodes = data.allMarkdownRemark.edges
    return (
        <Page>
            <section className="section">
                <div className="container">
                    <div className="columns is-mobile">
                        <div className="column is-half is-offset-one-quarter">
                            <h1>Testing</h1>
                            <div className="tile is-ancestor">
                                {nodes.map(({ node }) => (
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p>{node.excerpt}</p>
                                            <Link to={node.fields.slug}>Read</Link>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export const query = graphql`
    query { 
        allMarkdownRemark {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date
                }
                fields {
                    slug
                }
                excerpt
              }
            }
        }
    }
`