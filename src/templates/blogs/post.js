import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../components/Layout';
import { SEO } from '../../components/Seo';
import { Calendar } from '../../components/Icons/Calendar';
import '../../styles/code.css';
import { styled } from './styles';

const Post = ({ data, pageContext }) => {
	const { previous, next } = pageContext;
	const post = data.markdownRemark;

	return (
		<Layout>
			<SEO title={post.frontmatter.title} description={post.excerpt} />
			<span className="Date">
				<Calendar Fill="#5EBFBF" /> {post.frontmatter.date}
			</span>
			<section className="Template" dangerouslySetInnerHTML={{ __html: post.html }} />
			<p>{previous}</p>
			<p>{next}</p>
			<style jsx>{styled}</style>
		</Layout>
	);
};

export default Post;

export const data = graphql`
	query BlogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			excerpt
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`;
