exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createRedirect({
    fromPath: `/page-3`,
    // rewriting to a site on gatsby-cloud
    toPath: "https://collarcitycode.com/",
    statusCode: 200,
  });
}
