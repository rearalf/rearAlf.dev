import { useEffect, useState } from 'react';

export function useTheme(){
	const [ Theme, setTheme ] = useState(localStorage.getItem('Theme') === 'dark' ? true : false);
	const [ ThemeLogo, setThemeLogo ] = useState('#ebebeb');

	const handleChange = () => setTheme(!Theme);

	useEffect(
		() => {
			if (Theme) {
				setThemeLogo('#ebebeb');
				localStorage.setItem('Theme', 'dark');
				document.body.classList.remove('light');
				document.body.classList.add('dark');
			}
			else {
				setThemeLogo('#0B1C26');
				localStorage.setItem('Theme', 'light');
				document.body.classList.remove('dark');
				document.body.classList.add('light');
			}
		},
		[ Theme ],
	);

	return {
		Theme,
		handleChange,
		ThemeLogo,
	};
}
