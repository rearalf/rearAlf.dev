import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import MDXComponents from '../../components/MDXComponents'
import SEO from '../../components/SEO'
import Layout from '../../Layout'
import { formatDate } from '../../lib/format-date'
import { getFiles, getFilesBySlug } from '../../lib/mdx'

const Blog = (props: {
	source: any
	frontmatter: {
		title: string
		description: string
		categories: {
			title: string
			link: string
		}[]
		date: string
	}
}) => (
	<Layout>
		<SEO title={props.frontmatter.title} description={props.frontmatter.description} />
		<div className="content-MDX p-6 lg:p-12 rounded">
			<div className="flex items-center flex-col lg:flex-row justify-between gap-6 mb-6">
				<p className="flex items-center gap-2 text-lg">
					<FiCalendar size={18} /> {formatDate(props.frontmatter.date)}
				</p>
				<div className="flex items-center gap-6">
					{props.frontmatter.categories.map(tag => (
						<a
							className="article-link-home rounded px-4 py-2 hover:opacity-80"
							href={tag.link}
							key={tag.link}
							target="_blank"
							rel="noopener noreferrer">
							{tag.title}
						</a>
					))}
				</div>
			</div>
			<MDXRemote {...props.source} components={MDXComponents} />
		</div>
	</Layout>
)

export async function getStaticPaths() {
	const posts = await getFiles('blogs')
	const paths = posts.map(post => ({
		params: {
			slug: post.replace(/\.mdx/, ''),
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const { source, frontmatter } = await getFilesBySlug('blogs', params.slug)
	return {
		props: {
			source,
			frontmatter: {
				...frontmatter,
			},
		},
	}
}

export default Blog
