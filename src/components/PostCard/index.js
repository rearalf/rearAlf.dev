import { Link } from 'gatsby';
import React from 'react';
import { styled } from './styles';

export const PostCard = ({ title, description, categories, date, slug, img }) => {
	return (
		<article className="postCard">
			<Link to={slug}>
				<div
					className="postCardImage"
					style={{
						backgroundImage: `url(${img})`,
					}}>
					<time dateTime="12 April, 2020">{date}</time>
				</div>
			</Link>
			<div className="tags">
				{categories.map((category, index) => (
					<p key={index} className="tag">
						{category}
					</p>
				))}
			</div>
			<Link to={slug}>
				<h1>{title}</h1>
			</Link>
			<p className="textPostCard">{description}</p>
			<style jsx>{styled}</style>
		</article>
	);
};
