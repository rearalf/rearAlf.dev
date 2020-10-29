import { useEffect, useState } from 'react';

const NameTheme = {
	dark: 'dark',
	light: 'light',
};

export function useTheme(){
	const local = localStorage.getItem('Theme');
	const [ Theme, setTheme ] = useState(local === NameTheme.dark ? true : false);
	const [ ThemeLogo, setThemeLogo ] = useState('#ebebeb');

	const handleChange = () => setTheme(!Theme);

	useEffect(
		() => {
			if (Theme) {
				setThemeLogo('#ebebeb');
				localStorage.setItem('Theme', NameTheme.dark);
				document.body.classList.remove(NameTheme.light);
				document.body.classList.add(NameTheme.dark);
			}
			else {
				setThemeLogo('#0B1C26');
				localStorage.setItem('Theme', NameTheme.light);
				document.body.classList.remove(NameTheme.dark);
				document.body.classList.add(NameTheme.light);
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
