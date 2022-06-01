import { MDXRemote } from 'next-mdx-remote'
import { FiCalendar, FiExternalLink, FiGithub } from 'react-icons/fi'
import MDXComponents from '../../components/MDXComponents'
import SEO from '../../components/SEO'
import Layout from '../../Layout'
import { formatDate } from '../../lib/format-date'
import { getFiles, getFilesBySlug } from '../../lib/mdx'

const Portfolio = (props: {
	source: any
	frontmatter: {
		title: string
		description: string
		categories: {
			title: string
			link: string
		}[]
		date: string
		github: string
		liveSite: string
	}
}) => {
	/* const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, []) */
	return (
		<Layout>
			<SEO title={props.frontmatter.title} description={props.frontmatter.description} />
			<div className="content-MDX p-6 lg:p-12 rounded">
				<div className="flex items-center flex-col lg:flex-row justify-between gap-6 mb-8">
					<p className="flex items-center gap-2 text-lg">
						<FiCalendar size={18} /> {formatDate(props.frontmatter.date)}
					</p>
					{props.frontmatter.liveSite && (
						<a
							className="flex items-center gap-2 hover:underline"
							href={props.frontmatter.liveSite}
							target="_blank"
							rel="noopener noreferrer">
							<FiExternalLink size={16} />
							Ver sitio
						</a>
					)}
					{props.frontmatter.github && (
						<a
							className="flex items-center gap-2 hover:underline"
							href={props.frontmatter.github}
							target="_blank"
							rel="noopener noreferrer">
							<FiGithub size={16} />
							Ver código
						</a>
					)}
					<div className="flex gap-3">
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
}

export async function getStaticPaths() {
	const posts = await getFiles('portfolios')
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
	const { source, frontmatter } = await getFilesBySlug('portfolios', params.slug)
	return {
		props: {
			source,
			frontmatter: {
				...frontmatter,
			},
		},
	}
}

export default Portfolio
