import { Fragment } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

type Props = {
	children: JSX.Element | JSX.Element[]
}
const Layout = ({ children }: Props) => {
	return (
		<Fragment>
			<NavBar />
			<main className="container mx-auto px-4 relative overflow-x-hidden">{children}</main>
			<Footer />
		</Fragment>
	)
}

export default Layout
