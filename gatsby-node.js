const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
	if (stage.startsWith('develop')) {
		actions.setWebpackConfig({
			resolve: {
				alias: {
					'react-dom': '@hot-loader/react-dom',
				},
			},
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogPostTemplate = path.resolve('./src/templates/blogs/post.js');
	const portfolioTemplate = path.resolve('./src/templates/portfolios/index.js');

	const blogPostResult = await graphql(`
		{
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/(blog)/" } }
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 1000
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							categories
						}
					}
				}
			}
			categoriesGroup: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___categories) {
					fieldValue
				}
			}
		}
	`);

	const portfolioResult = await graphql(`
		{
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 1000
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							categories
						}
					}
				}
			}
		}
	`);

	if (blogPostResult.errors || portfolioResult.errors) {
		throw blogPostResult.errors;
	}

	// Create blog post page
	const posts = blogPostResult.data.allMarkdownRemark.edges;
	const portfolios = portfolioResult.data.allMarkdownRemark.edges;

	posts.forEach((post, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node;
		const next = index === 0 ? null : posts[index - 1].node;

		createPage({
			path: post.node.fields.slug,
			component: blogPostTemplate,
			context: {
				slug: post.node.fields.slug,
				previous,
				next,
			},
		});
	});

	portfolios.forEach(portfolio => {
		createPage({
			path: portfolio.node.fields.slug,
			component: portfolioTemplate,
			context: {
				slug: portfolio.node.fields.slug,
			},
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			node,
			name: `slug`,
			value,
		});
	}
};
