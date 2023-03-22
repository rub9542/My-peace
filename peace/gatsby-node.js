const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const mediaPost = path.resolve("./src/components/mediaDetail/index.js");
  const newsLetterTemplate = path.resolve(
    "./src/components/newsLetter/index.js"
  );
  const blogtemplate = path.resolve("./src/components/articleDetails/index.js");
  const jobstemplate = path.resolve("./src/components/jobsDetail/index.js");
  const result = await graphql(
    `
      {
        allStrapiPost {
          nodes {
            Slug
            title
            id
            description
          }
        }
        allStrapiNewsLetter {
          nodes {
            Slug
            id
            description
            title
          }
        }
        allStrapiBlog {
          nodes {
            Slug
            id
            title
            description
          }
        }
        allStrapiJob {
          nodes {
            Slug
            title
            description {
              data {
                description
                id
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    );

    return;
  }

  const media = result.data.allStrapiPost.nodes;
  const blog = result.data.allStrapiBlog.nodes;
  const newsLetter = result.data.allStrapiNewsLetter.nodes;
  const Jobs = result.data.allStrapiJob.nodes;

  if (Jobs.length > 0) {
    Jobs.forEach((articleItem) => {
      createPage({
        path: `/career/${articleItem.Slug}`,
        component: jobstemplate,
        context: {
          slug: articleItem.Slug,
        },
      });
    });
  }

  if (media.length > 0) {
    media.forEach((articleItem) => {
      createPage({
        path: `/media/${articleItem.Slug}`,
        component: mediaPost,
        context: {
          slug: articleItem.Slug,
        },
      });
    });
  }
  if (newsLetter.length > 0) {
    newsLetter.forEach((articleItem) => {
      createPage({
        path: `/newsLetter/${articleItem.Slug}`,
        component: newsLetterTemplate,
        context: {
          slug: articleItem.Slug,
        },
      });
    });
  }
  if (blog.length > 0) {
    blog.forEach((articleItem) => {
      createPage({
        path: `/articles/${articleItem.Slug}`,
        component: blogtemplate,
        context: {
          slug: articleItem.Slug,
        },
      });
    });
  }
};
