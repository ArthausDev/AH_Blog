const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              content {
                sectionHeading
                sectionHeadingIcon{
                  publicURL
                }
                sectionImages {
                  image {
                    publicURL
                  }
                  caption
                 imageAlt
                }
                sectionLinks {
                  linkLabel
                  linkUrl
                }
                sectionParagraphs {
                  paragraph
                  asteriskText
                }
              }
              title
              metadataTitle
              heroImg {
                publicURL
              }
              author
              company
              guestName
              guestAvatar{
                publicURL
              }
              publishedDate
              contactLinkIntro
              contactLinkLabel
              contactLinkUrl
            }
            fields {
              sourceName
              slug
            }
          }
        }
      }
    }
  `)
  //console.log("here", JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields.sourceName === "blogPages") {
     //  console.log("path for blog", node)

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/Blog/BlogPageLayout.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.

          blogItem: node,
        },
      })
    }
  })
}
