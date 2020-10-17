import React, { Fragment } from 'react';
import { PostCard } from '../components/PostCard';
import { HeadPage } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import '../styles/home.css';

export default function Home(){
	return (
		<Fragment>
			<HeadPage title="Home" description="Mí webside" />
			<NavBar />
			<main className="contentMain container">
				<section className="listPost">
					<PostCard />
					<PostCard />
					<PostCard />
				</section>
			</main>
			<Footer />
		</Fragment>
	);
}
