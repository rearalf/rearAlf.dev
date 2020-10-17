import { styled } from './styles';

const Img =
	'https://i1.wp.com/www.vidagnu.com/wp-content/uploads/2014/12/javascript.png?fit=800%2C300&ssl=1';

export const PostCard = () => {
	return (
		<article className="postCard">
			<div
				className="postCardImage"
				style={{
					backgroundImage: `url(${Img})`,
				}}>
				<time dateTime="12 April, 2020">12 April, 2020</time>
			</div>
			<div className="tags">
				<p className="tag">HTML</p>
				<p className="tag">CSS</p>
				<p className="tag">JS</p>
			</div>
			<h1>Un buen titulo para empezar</h1>
			<p className="textPostCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis commodi a dolor! Optio rem debitis nisi laboriosam? Vero nostrum, soluta dolorem vel maxime nemo!</p>
			<style jsx>{styled}</style>
		</article>
	);
};
