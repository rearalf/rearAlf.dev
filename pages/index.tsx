import Layout from '../Layout'
import SEO from '../components/SEO'
import orderByDate from '../lib/order-by-date'
import ArticleLinks from '../components/ArticleLinks'
import { Fragment } from 'react'
import { formatDate } from '../lib/format-date'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { getAllFilesFrontMatter } from '../lib/mdx'

const Home = ({ content }: { content: FilesTitle[] }) => (
	<Fragment>
		<div className="image-cover  bg-contain bg-no-repeat" />
		<Layout>
			<SEO description="rearAlf.dev" title="Inicio" />
			<header className="header-home relative w-full flex flex-col gap-6 pt-6 lg:justify-center mb-8 px-10">
				<h1 className="text-3xl">Hola!, mi nombre es Ricardo Alf</h1>
				<p className="text-lg lg:w-2/5">
					Soy un Frontend Developer que apaciona desarrollar aplicaciones con tecnología
					web y aprender nuevos Framework y Librerías.
				</p>
				<div className="flex gap-4">
					<a
						href="https://github.com/rearalf"
						target="_blank"
						rel="noopener noreferrer"
						className="header-link github-icon p-3 rounded flex">
						<BsGithub size={24} />
					</a>
					<a
						href="https://twitter.com/rear_alf"
						target="_blank"
						rel="noopener noreferrer"
						className="header-link twitter-icon p-3 rounded flex">
						<BsTwitter size={24} />
					</a>
					<a
						href="https://www.linkedin.com/in/ricardo-alfaro-96744918a/"
						target="_blank"
						rel="noopener noreferrer"
						className="header-link linkedin-icon p-3 rounded flex">
						<BsLinkedin size={24} />
					</a>
				</div>
			</header>
			<section className="last-post rounded p-6 mb-6">
				<h2 className="text-2xl mb-4">Ultimos post</h2>
				<div className="flex flex-col gap-6">
					{content &&
						content.map(content => <ArticleLinks {...content} key={content.slug} />)}
				</div>
			</section>
		</Layout>
	</Fragment>
)

/**
 * It gets all the files in the blogs and portfolios directories, sorts them by date, formats the date,
 * and returns the first 5 items.
 * @returns An array of objects.
 */
export async function getStaticProps() {
	const unorderedBlogs = await getAllFilesFrontMatter('blogs')
	const unorderedPortfolios = await getAllFilesFrontMatter('portfolios')
	const portfolios = unorderedPortfolios.sort(orderByDate)
	const blogs = unorderedBlogs.sort(orderByDate)
	blogs.map(blog => {
		blog.date = formatDate(blog.date)
		return blog
	})
	portfolios.map(portfolio => {
		portfolio.date = formatDate(portfolio.date)
		return portfolio
	})
	const content = [...blogs, ...portfolios]
	return {
		props: { content: content.slice(0, 5) },
	}
}

export default Home
