import React from 'react'
import ArticleLinks from '../../components/ArticleLinks'
import SEO from '../../components/SEO'
import Layout from '../../Layout'
import { formatDate } from '../../lib/format-date'
import { getAllFilesFrontMatter } from '../../lib/mdx'
import orderByDate from '../../lib/order-by-date'

const Blogs = ({ content }: { content: FilesTitle[] }) => {
	return (
		<Layout>
			<SEO
				title="Totos los blogs"
				description="Todos los tutoriales o tecnologías que veo y conozco."
			/>
			<section className="last-post rounded p-6 mb-6">
				<h1 className="text-3xl mb-4">Ultimos post</h1>
				{content &&
					content.map(content => <ArticleLinks {...content} key={content.slug} />)}
			</section>
		</Layout>
	)
}

/**
 * It gets all the files in the blogs and portfolios directories, sorts them by date, formats the date,
 * and returns the first 5 items.
 * @returns An array of objects.
 */
export async function getStaticProps() {
	const unorderedBlogs = await getAllFilesFrontMatter('blogs')
	const blogs = unorderedBlogs.sort(orderByDate)
	blogs.map(blog => {
		blog.date = formatDate(blog.date)
		return blog
	})
	return {
		props: { content: blogs },
	}
}

export default Blogs
