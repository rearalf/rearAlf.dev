const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'rearAlf',
		description: 'El website de Ricardo Alf',
		author: 'Ricardo Alfaro',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-styled-jsx`,
			options: {
				optimizeForSpeed: true,
				sourceMaps: false,
				vendorPrefixes: true,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: path.join(__dirname, 'src', 'data', 'blogs'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'portfolio',
				path: path.join(__dirname, 'src', 'data', 'portfolios'),
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				excerpt_separator: '<!-- endexcerpt -->',
				plugins: [
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							showLineNumbers: true,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					},
				],
			},
		},
	],
};
