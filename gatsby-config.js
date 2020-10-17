module.exports = {
	siteMetadata: {
		title: 'rearAlf',
		description: 'El website de Ricardo Alf',
		author: 'Ricardo Alfaro',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-styled-jsx`,
			options: {
				optimizeForSpeed: true,
				sourceMaps: false,
				vendorPrefixes: true,
			},
		},
	],
};
