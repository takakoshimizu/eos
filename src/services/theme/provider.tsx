import React, { useState, useEffect, FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '.';

type Props = {
	children: JSX.Element;
};

export const ColorThemeProvider: FunctionComponent<Props> = ({ children }) => {
	const [colorTheme, setColorTheme] = useState(lightTheme);

	useEffect(() => {
		const mediaMatcher = window.matchMedia('(prefers-color-scheme: dark');

		if(mediaMatcher.matches) {
			setColorTheme(darkTheme);
		}

		mediaMatcher.addEventListener('change', e => {
			if (e.matches) {
				setColorTheme(darkTheme);
			} else {
				setColorTheme(lightTheme);
			}
		});
	}, []);

	return (
		<ThemeProvider theme={colorTheme}>
			{children}
		</ThemeProvider>
	);
};
