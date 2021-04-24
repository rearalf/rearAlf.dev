import React from 'react';
import { graphql } from 'gatsby';
import { Calendar } from '../../components/Icons/Calendar';
import { Layout } from '../../components/Layout';
import { Seo } from '../../components/Seo';
import { GitHub } from '../../components/Icons/GitHub';
import { LinkIcon } from '../../components/Icons/Link';
import '../../styles/template.scss';

const Portafolio = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<Seo title={post.frontmatter.title} description={post.excerpt} />
			<div className="contentTemplate">
				<div className="contentHead">
					<span className="Date">
						<Calendar Fill="#5EBFBF" Title={post.frontmatter.date} />
						{post.frontmatter.date}
					</span>
					{post.frontmatter.liveSite && (
						<a
							className="Date"
							href={post.frontmatter.liveSite}
							target="_blank"
							rel="noopener noreferrer">
							<LinkIcon Fill="#5EBFBF" Width="15" Height="15" />
							Ver Sitio
						</a>
					)}
					{post.frontmatter.github && (
						<a
							className="Date"
							href={post.frontmatter.github}
							target="_blank"
							rel="noopener noreferrer">
							<GitHub Fill="#5EBFBF" Width="21" Height="21" Title="Ver código" />
							Ver código
						</a>
					)}
				</div>
				<section className="Template" dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</Layout>
	);
};

export default Portafolio;

export const data = graphql`
	query PortfolioBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			excerpt
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
				github
				liveSite
			}
		}
	}
`;
