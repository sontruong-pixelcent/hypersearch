// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_SITE_URL,
    title: "Smart CCTV",
    author: `Surge`,
    description: "Smart CCTV and Alarms in KeriKeri",
    image: "/logo.png",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL,
        schema: {
          timeout: 200000,
        },
      },
    },
    {
      resolve: "gatsby-plugin-gravity-forms",
      options: {
        // This URL should be the same as you use for your
        // gatsby-source-wordpress options.
        url: process.env.WPGRAPHQL_URL,
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Smart CCTV",
        short_name: "SmartCCTV",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
    "gatsby-plugin-sass",
  ],
}
