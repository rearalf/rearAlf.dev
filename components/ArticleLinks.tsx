import React from 'react'
import Link from 'next/link'
import { FiCalendar } from 'react-icons/fi'
const ArticleLinks = (props: FilesTitle) => (
	<article className="flex flex-col p-6 border-b-2">
		<Link href={`/${props.type}/${props.slug}`}>
			<a className='mb-4'>
				<h3 className="text-xl hover:underline">{props.title}</h3>
			</a>
		</Link>
		<div className="flex flex-col items-center lg:flex-row">
			<span className="flex mr-6 items-center mb-6 lg:mb-0">
				<FiCalendar size={16} className="mr-2" /> {props.date}
			</span>
			<div className="flex">
				{props.categories.map(tag => (
					<a
						className="article-link-home rounded px-4 py-2 hover:opacity-80 mr-3 last:mr-0"
						href={tag.link}
						key={tag.link}
						target="_blank"
						rel="noopener noreferrer">
						{tag.title}
					</a>
				))}
			</div>
		</div>
	</article>
)

export default ArticleLinks
