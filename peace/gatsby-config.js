/**
 * @type {import('gatsby').GatsbyConfig}
 */

const strapiConfig = {
  apiURL: "https://sukoon-backend.onrender.com/",
  accessToken:
    "46371ba45aebbfa6b8dcc2383cbabaf050ccb25204aeb3e9e90d2fc782082bfe06cee6640ff1fb4c873331dcb7a42d20184b4fbc452a2985da4132be7d29fb789c82e69959bc2be0e49a7566890b562708b6aea0dd53fa313d9ae0aedb510f3e0050535cacf99bdb2fd9f295fa4dff6f1801734eec3865f19f1db677fb30552c",
  collectionTypes: [
    "media-category",
    {
      singularName: "media",
      populate: "*",
    },
    {
      singularName: "news-letters",
      populate: "*",
    },
    {
      singularName: "news-letter",
      populate: "*",
    },
    "post",
    "blog",
    "posts",
    "user",
    "job",
  ],
  queryLimit: 1000,
};

module.exports = {
  siteMetadata: {
    title: `sukoon`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
