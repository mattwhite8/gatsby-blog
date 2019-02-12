const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = (({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' })

        // add custom field to our node
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
})