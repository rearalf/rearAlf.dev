import React from 'react';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import { PostCard } from '../components/PostCard';
import { Seo } from '../components/Seo';

export default function Blogs({ data }){
	const { edges } = data.allMarkdownRemark;
	return (
		<Layout>
			<Seo title="Blogs" description="Tutoriales e infromación que podria interesarte" />
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
			filter: { fileAbsolutePath: { regex: "/(blog)/" } }
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
