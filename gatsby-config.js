module.exports = {
    plugins: [
      `gatsby-plugin-sass`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-transition-link`,
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
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/img/`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [`gatsby-remark-responsive-iframe`],
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Becoming a Spartan`,
          short_name: `Spartan`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: `standalone`,
          icon: `src/img/icon.png`, // This path is relative to the root of the site.
          include_favicon: true, // Include favicon
        },
      },
      `gatsby-plugin-offline`,
    ],
  }