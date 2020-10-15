import { Helmet } from 'react-helmet';

export function HeadPage({ title = '', description = '' } = {}){
	return (
		<Helmet>
			<title>{title} || rearAlf</title>
			<meta name="description" content={description} />
		</Helmet>
	);
}
