import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { PostCard } from '../components/PostCard';

export default function Portfolio({ data }){
	const { edges } = data.allMarkdownRemark;
	return (
		<Layout>
			<Seo title="Mí portafolio" description="Toda mi experiencia y preactica." />
			<section className="listPost">
				{edges.map((edge, index) => {
					const { frontmatter, fields } = edge.node;
					return (
						<PostCard
							key={index}
							title={frontmatter.title}
							categories={frontmatter.categories}
							description={frontmatter.description}
							date={frontmatter.date}
							img={frontmatter.image.childImageSharp.fluid.src}
							slug={fields.slug}
						/>
					);
				})}
			</section>
		</Layout>
	);
}

export const Query = graphql`
	{
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						categories
						description
						image {
							childImageSharp {
								fluid(maxWidth: 600, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
