import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../../static/favicon.ico';

export function Seo({ title = '', description = '' } = {}){
	return (
		<Helmet>
			<title>{title} || rearAlf</title>
			<meta name="description" content={description} />
			<link rel="icon" href={favicon} />
			<html lang="es" />
			<meta
				name="google-site-verification"
				content="DRJHKE1m-qQ_urqzVZCOdNOxZddlPAKdJEKM6eF1NGQ"
			/>
		</Helmet>
	);
}
