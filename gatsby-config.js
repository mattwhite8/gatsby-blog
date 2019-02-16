module.exports = {
    plugins: [
      `gatsby-plugin-sass`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `${__dirname}/src/posts/`,
        },
      },
      `gatsby-transformer-remark`,
    ],
  }