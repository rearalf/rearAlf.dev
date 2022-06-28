import React from 'react'
import Link from 'next/link'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
	return (
		<footer className="container mx-auto mt-12 px-4 py-12 flex flex-col gap-6 lg:flex-row items-center justify-between">
			<Link href="/">
				<a className="flex items-center gap-4">
					<h1 className="text-lg font-normal">
						Ricardo Alf © {new Date().getFullYear()}
					</h1>
				</a>
			</Link>
			<div className="flex">
				<a
					href="https://github.com/rearalf"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 rounded flex mr-4 hover:opacity-60">
					<BsGithub size={24} />
				</a>
				<a
					href="https://twitter.com/rear_alf"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 rounded flex mr-4 hover:opacity-60">
					<BsTwitter size={24} />
				</a>
				<a
					href="https://www.linkedin.com/in/ricardo-alfaro-96744918a/"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 rounded flex hover:opacity-60">
					<BsLinkedin size={24} />
				</a>
			</div>
		</footer>
	)
}

export default Footer
