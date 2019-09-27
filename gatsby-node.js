const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const Menus = graphql(`
    {
      dinner: allSanityMenu(filter: { slug: { current: { eq: "dinner" } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      drinks: allSanityMenu(filter: { slug: { current: { eq: "drinks" } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      dessert: allSanityMenu(filter: { slug: { current: { eq: "dessert" } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      brunch: allSanityMenu(filter: { slug: { current: { eq: "brunch" } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      specials: allSanityMenu(
        filter: { slug: { current: { eq: "specials" } } }
      ) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.dinner.edges.forEach(({ node }) => {
      createPage({
        path: node.slug.current,
        component: path.resolve(`./src/templates/dinner.js`),
      })
    })
    result.data.drinks.edges.forEach(({ node }) => {
      createPage({
        path: node.slug.current,
        component: path.resolve(`./src/templates/drinks.js`),
      })
    })
    result.data.dessert.edges.forEach(({ node }) => {
      createPage({
        path: node.slug.current,
        component: path.resolve(`./src/templates/dessert.js`),
      })
    })
    result.data.brunch.edges.forEach(({ node }) => {
      createPage({
        path: node.slug.current,
        component: path.resolve(`./src/templates/brunch.js`),
      })
    })
    result.data.specials.edges.forEach(({ node }) => {
      createPage({
        path: node.slug.current,
        component: path.resolve(`./src/templates/specials.js`),
      })
    })
  })
  return Promise.all([Menus])
}
