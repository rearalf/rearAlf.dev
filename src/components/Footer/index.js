import { GitHub } from '../Icons/GitHub';
import { styled } from './styles';

export const Footer = () => {
	return (
		<footer>
			<div className="content container">
				<p>Hecho dolor y esfuerso. </p>
				<a
					className="Proyect"
					href="https://github.com/rearalf/rearalf.dev"
					target="_blank"
					rel="noopener noreferrer">
					<GitHub width={25} Fill={'#5EBFBF'} />
					Enlace del proyecto
				</a>
			</div>
			<style jsx>{styled}</style>
		</footer>
	);
};
