import React from 'react';

export const LinkIcon = ({ Height = 21, Width = 21, Fill = '#2a2e3b', Title = 'Enlace' }) => {
	return (
		<svg width={Width} height={Height} viewBox="0 0 20 20">
			<title>{Title}</title>
			<path
				fill="none"
				stroke={Fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M15.86 7.61v10.22c0 .69-.56 1.25-1.25 1.25H2.37c-.69 0-1.25-.56-1.25-1.25V5.6c0-.69.56-1.25 1.25-1.25h9.75m6.76 1.48l-.1-4.82M13.97.92l4.81.09m-9.42 9.46l8.5-8.5"
			/>
		</svg>
	);
};
