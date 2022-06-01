import React from 'react'
import Link from 'next/link'
import { FiCalendar } from 'react-icons/fi'
// flex flex-col gap-3 px-6 py-6 border-b-2 hover:opacity-75
const ArticleLinks = (props: FilesTitle) => (
	<article className="flex flex-col gap-3 p-6 border-b-2">
		<Link href={`/${props.type}/${props.slug}`}>
			<a>
				<h3 className="text-xl hover:underline">{props.title}</h3>
			</a>
		</Link>
		<div className="flex flex-col gap-6 items-center lg:flex-row">
			<span className="flex gap-2 items-center">
				<FiCalendar size={16} /> {props.date}
			</span>
			<div className="flex gap-2">
				{props.categories.map(tag => (
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
	</article>
)

export default ArticleLinks
