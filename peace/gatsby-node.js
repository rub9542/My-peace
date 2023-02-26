const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const articlePost = path.resolve("./src/components/mediaDetail/index.js");
  const newsLetterTemplate = path.resolve("./src/components/newsLetter/index.js")
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

  const articles = result.data.allStrapiPost.nodes;
  const newsLetter = result.data.allStrapiNewsLetter.nodes;

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/media/${article.Slug}`,
        component: articlePost,
        context: {
          slug: article.Slug,
        },
      });
    });
  }
  if (newsLetter.length > 0) {
    newsLetter.forEach((article) => {
      createPage({
        path: `/newsLetter/${article.Slug}`,
        component: newsLetterTemplate,
        context: {
          slug: article.Slug,
        },
      });
    });
  }
};
