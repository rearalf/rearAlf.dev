import { Helmet } from 'react-helmet';
import favicon from '../../../static/favicon.ico';

export function HeadPage({ title = '', description = '' } = {}){
	return (
		<Helmet>
			<title>{title} || rearAlf</title>
			<meta name="description" content={description} />
			<body className="dark" />
			<link rel="icon" href={favicon} />
		</Helmet>
	);
}
