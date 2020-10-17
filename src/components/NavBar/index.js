import { Link } from 'gatsby';
import { useTheme } from '../../hooks/useTheme';
import { GitHub } from '../Icons/GitHub';
import Logo from '../Icons/Logo';
import { Twitter } from '../Icons/Twitter';
import { styled } from './styles';

export const NavBar = () => {
	const { ThemeLogo, handleChange, Theme } = useTheme();

	const classThem = Theme ? 'themeDark' : 'themeLight';
	const FillGitHub = Theme ? '#333' : '#f5f5f5';
	const ThemeTitle = Theme ? 'Theme Dark' : 'Theme Light';

	return (
		<header>
			<div className="container">
				<div className="navHead">
					<Link to="/">
						<Logo fill={ThemeLogo} width={150} height={40} />
					</Link>
					<div className="headRight">
						<a
							href="https://github.com/rearalf"
							target="_blank"
							rel="noopener noreferrer">
							<GitHub width={25} Fill={FillGitHub} />
						</a>
						<a
							href="https://github.com/rearalf"
							target="_blank"
							rel="noopener noreferrer">
							<Twitter width={25} />
						</a>
						<button onClick={handleChange} title={ThemeTitle}>
							<div className={classThem}>
								<div className="cosasRara" />
							</div>
						</button>
					</div>
				</div>
				<nav>
					<div className="navLinkLeft">
						<Link to="/">Home</Link>
						<Link to="/articles">Articulos</Link>
						<Link to="/proyects">Proyectos</Link>
					</div>
					<div className="navLinkRight">
						<Link to="/about">Acerca</Link>
					</div>
				</nav>
			</div>
			<style jsx>{styled}</style>
		</header>
	);
};
