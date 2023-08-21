import React from 'react'
import Layout from '../Layout'
import SEO from '../components/SEO'

const About = () => {
	return (
		<Layout>
			<SEO description="rearAlf.dev" title="About" />
			<div>About</div>
            <div></div>
			<a
				href="/Ricardo Alfaro CV.docx"
				className="btn px-8 py-4 text-base rounded mb-9 inline-block"
				target="_blank"
				rel="noopener noreferrer"
			>
				El otro cv en w
			</a>
			<div></div>
			<a
				href="/Ricardo Alfaro CV.pdf"
				className="btn px-8 py-4 text-base rounded"
				target="_blank"
				rel="noopener noreferrer"
			>
				El otro cv en pdf
			</a>
		</Layout>
	)
}

export default About
