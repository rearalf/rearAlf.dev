const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'rearAlf',
		description: 'El website personal de Ricardo Alf',
		author: 'Ricardo Alfaro',
		firstName: `Ricardo`,
		lastName: `Alfaro`,
		occupation: `Frontend Developer`,
		keywords: [ 'Ricardo', 'Ricardo Alf', 'Alf', 'Blog' ],
		siteUrl: 'https://rearalf.vercel.app/',
	},
	plugins: [
		`gatsby-plugin-sass`,
		'gatsby-plugin-react-helmet',
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'portfolio',
				path: path.join(__dirname, 'src', 'data', 'portfolios'),
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
			resolve: 'gatsby-transformer-remark',
			options: {
				excerpt_separator: '<!-- endexcerpt -->',
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					},
					{
						resolve: 'gatsby-remark-prismjs',
					},
				],
			},
		},
	],
};
