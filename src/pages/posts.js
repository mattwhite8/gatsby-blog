import React from 'react'
import Page from '../components/IndexPage'
import { graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { css } from '@emotion/core'

export default ({ data }) => {
    console.log(data.allMarkdownRemark)
    const nodes = data.allMarkdownRemark.edges
    return (
        <Page>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline">
                        {nodes.map(({ node }) => (
                            <div className="column is-one-quarter">
                                <div className="card" css={css`
                                    margin-bottom: 1rem
                                `}>
                                    <div className="card-image">
                                        <div className="hero is-info is-bold">
                                            <div className="hero-body">
                                                <h1 className="title">{node.frontmatter.title}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">{node.excerpt}</div>
                                    </div>
                                    <footer className="card-footer">
                                        <AniLink fade to={node.fields.slug} duration={.5} className="card-footer-item">Read</AniLink>
                                    </footer>
                                </div>
                            </div>
                        ))}
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