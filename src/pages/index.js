import React from 'react';
import { PostCard } from '../components/PostCard';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import { Seo } from '../components/Seo';

export default function Home({ data }){
	const { edges } = data.allMarkdownRemark;
	return (
		<Layout>
			<Seo
				title="rearalf.dev"
				description="Mi nombre es Ricardo Alfaro, pero puedes llamarme Alf, y en mi aquí puedes encontrar tutórales relacionados con JavaScript, y mi portafolio."
			/>
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
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
