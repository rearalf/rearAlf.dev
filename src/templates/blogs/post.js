import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../../components/Layout';
import { Seo } from '../../components/Seo';
import { Calendar } from '../../components/Icons/Calendar';
import '../../styles/template.scss';
import '../../styles/code.css';

const Post = ({ data, pageContext }) => {
	const { previous, next } = pageContext;
	const post = data.markdownRemark;

	return (
		<Layout>
			<Seo title={post.frontmatter.title} description={post.excerpt} />
			<div className="contentTemplate">
				<span className="Date">
					<Calendar Fill="#5EBFBF" /> {post.frontmatter.date}
				</span>
				<section className="Template" dangerouslySetInnerHTML={{ __html: post.html }} />
				<div className="prevAndnext">
					<div>
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								← {previous.frontmatter.title}
							</Link>
						)}
					</div>
					<div>
						{next && (
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						)}
					</div>
				</div>
			</div>
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
