import React from 'react';
import { HeadPage } from '../components/Header';
import { NavBar } from '../components/NavBar';

export default function Home(){
	return (
		<div>
			<HeadPage title="Home" description="Mí webside" />
			<NavBar />
			<nav>Gel</nav>
			Hello world!
		</div>
	);
}
