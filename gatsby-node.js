const path = require('path');

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      })
    );
  });

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const generatePages = makeRequest(
    graphql,
    `
        {
          allStrapiPortfolio{
                edges {
                    node {
                        id
                        slug
                    }
                    next {
                      slug
                    }
                    previous {
                      slug
                    }
                }
            }
            allStrapiServices{
              edges {
                  node {
                      id
                      slug
                  }
              }
          }
            allStrapiBlogs {
              edges {
                node {
                    id
                    slug
                }
                next {
                  slug
                }
                previous {
                  slug
                }
              }
            }      
        }
    `
  ).then((result) => {
    result.data.allStrapiPortfolio.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: `/pf/${node.slug}/`,
        component: path.resolve(`src/template/portfolio-inner.js`),
        context: {
          id: node.id,
          next,
          previous,
        },
      });
    });
    result.data.allStrapiServices.edges.forEach(({ node }) => {
      createPage({
        path: `/services/${node.slug}/`,
        component: path.resolve(`src/template/services-inner.js`),
        context: {
          id: node.id,
        },
      });
    });
    result.data.allStrapiBlogs.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: `/blog/${node.slug}/`,
        component: path.resolve(`src/template/blog-inner.js`),
        context: {
          id: node.id,
          next, 
          previous,
        },
      });
    });
  });

  return Promise.all([generatePages]);
};
