import React from 'react'
import ArticleLinks from '../../components/ArticleLinks'
import SEO from '../../components/SEO'
import Layout from '../../Layout'
import { formatDate } from '../../lib/format-date'
import { getAllFilesFrontMatter } from '../../lib/mdx'
import orderByDate from '../../lib/order-by-date'

const Portfolios = ({ content }: { content: FilesTitle[] }) => {
	return (
		<Layout>
			<SEO
				title="Totos los proyectos"
				description="Todos los tutoriales o tecnologías que veo y conozco."
			/>
			<section className="last-post rounded p-6 mb-6">
				<h1 className="text-3xl mb-4">Ultimos Proyectos</h1>
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
	const unorderedPortfolios = await getAllFilesFrontMatter('portfolios')
	const portfolios = unorderedPortfolios.sort(orderByDate)
	portfolios.map(portfolio => {
		portfolio.date = formatDate(portfolio.date)
		return portfolio
	})
	return {
		props: { content: portfolios },
	}
}

export default Portfolios
