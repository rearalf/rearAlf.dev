import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.svg'

const NavBar = () => {
	return (
		<header className="container mx-auto px-4 mb-8">
			<nav className="py-8 flex items-center justify-between flex-col gap-9 md:flex-row">
				<Link href="/">
					<a className="flex items-center gap-4">
						<Image src={Logo} width={48} height={48} alt="Ricardo Alf logo" />
						<h1 className="text-2xl font-medium">Ricardo Alf</h1>
					</a>
				</Link>
				<div className="flex flex-col gap-8 sm:flex-row">
					<ul className="flex items-center gap-8">
						<Link href="/">
							<li className="nav-item text-lg cursor-pointer ">Inicio</li>
						</Link>
						<Link href="/blog">
							<li className="nav-item text-lg cursor-pointer ">Blog</li>
						</Link>
						<Link href="/portfolio">
							<li className="nav-item text-lg cursor-pointer ">Proyectos</li>
						</Link>
					</ul>
					<a
						href="/Ricardo Alfaro.pdf"
						className="btn px-8 py-4 text-base rounded"
						target="_blank"
						rel="noopener noreferrer">
						Descargar curriculum
					</a>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
