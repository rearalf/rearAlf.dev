import React, { Fragment } from 'react';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import './styles.scss';

export const Layout = ({ children }) => {
	return (
		<Fragment>
			<NavBar />
			<main className="contentMain container">{children}</main>
			<Footer />
		</Fragment>
	);
};
