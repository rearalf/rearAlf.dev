import Link from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const CustomLink = (props: { href: string; children: JSX.Element }) => {
	const href = props.href
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
	if (isInternalLink) {
		return (
			<Link {...props}>
				<a className="text-center inline-flex items-center hover:underline">
					{props.children}
					{typeof props.children !== 'object' && (
						<FiExternalLink size={10} className="ml-2" />
					)}
				</a>
			</Link>
		)
	} else {
		return (
			<Link {...props}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="text-center inline-flex items-center hover:underline ">
					{props.children} <FiExternalLink size={10} className="ml-2" />
				</a>
			</Link>
		)
	}
}

export default CustomLink
