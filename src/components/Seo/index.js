import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../../static/favicon.ico';

export function SEO({ title = '', description = '' } = {}){
	return (
		<Helmet>
			<title>{title} || rearAlf</title>
			<meta name="description" content={description} />
			<link rel="icon" href={favicon} />
			<html lang="es" />
		</Helmet>
	);
}
