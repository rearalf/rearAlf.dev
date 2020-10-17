import { useState } from 'react';

export function useTheme(){
	const [ Theme, setTheme ] = useState(false);
	const [ ThemeLogo, setThemeLogo ] = useState('#ebebeb');

	const handleChange = () => {
		if (Theme) {
			setTheme(!Theme);
			setThemeLogo('#ebebeb');
			localStorage.setItem('Theme', 'dark');
			document.body.classList.add('dark');
			document.body.classList.remove('light');
		}
		else {
			localStorage.setItem('Theme', 'light');
			setTheme(!Theme);
			setThemeLogo('#0B1C26');
			document.body.classList.add('light');
			document.body.classList.remove('dark');
		}
	};

	return {
		Theme,
		handleChange,
		ThemeLogo,
	};
}
