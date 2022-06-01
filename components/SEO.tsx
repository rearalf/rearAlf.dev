import Head from 'next/head'

type PROPS = {
	description: string
	title: string
}
const SEO = ({ description, title }: PROPS) => (
	<Head>
		<title>{title} || rearAlf - Ricardo Alf</title>
		<meta
			name="google-site-verification"
			content="DRJHKE1m-qQ_urqzVZCOdNOxZddlPAKdJEKM6eF1NGQ"
		/>
		<meta name="description" content={description} />
		<meta property="og:title" content={title} />
		<meta property="og:type" content="website" />
		<meta property="og:description" content={description} />
		<meta property="og:site_name" content="rearAlf" />
		<meta property="twitter:card" content="summary" />
		<meta property="twitter:creator" content="@rear_alf" />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta name="theme-color" content="#09161F" />
		<meta name="apple-mobile-web-app-status-bar-style" content="#09161F" />
	</Head>
)

export default SEO
