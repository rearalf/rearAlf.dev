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
			//https://marcelhauri.ch/blog/how-to-colorize-a-tree-output-in-gatsbys-prism-plugin/
			//https://github.com/PrismJS/prism/blob/master/plugins/treeview/prism-treeview.css
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
						resolve: `gatsby-remark-prismjs`,
						options: {
							languageExtensions: [
								{
									language: 'treeview',
									extend: 'json',
									definition: {
										'entry-line': [
											{
												pattern: /\|-- |├── /,
												alias: 'line-h',
											},
											{
												pattern: /\|   |│   /,
												alias: 'line-v',
											},
											{
												pattern: /`-- |└── /,
												alias: 'line-v-last',
											},
											{
												pattern: / {4}/,
												alias: 'line-v-gap',
											},
										],
										'entry-dir': {
											pattern: /.*[\/](?!\w).*/,
											inside: {
												// symlink
												operator: / -> /,
											},
										},
										'entry-symlink': {
											pattern: /.*\S.* (-> .*)/,
											inside: {
												operator: / -> /,
												file: /(.*)/,
											},
										},
										'entry-name': {
											pattern: /.*\S.*/,
											inside: {
												// symlink
												operator: / -> /,
											},
										},
									},
								},
							],
						},
					},
				],
			},
		},
	],
};
