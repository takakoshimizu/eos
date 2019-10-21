export const theme: Theme = {
	light: {
		neutral: '#fefefe',
		text: '#111111',
		accent: 'blue'
	},
	dark: {
		neutral: '#111111',
		text: '#fefefe',
		accent: 'darkblue'
	},
	font: {
		primary: 'Helvetica, sans-serif'
	}
};

type Shade = 'light' | 'dark';
export type Theme = { [key: string]: Record<string, string> } 
type PropsWithTheme = { theme: Theme };

export const color = (shade: Shade, color: string) => (props: PropsWithTheme): string => props.theme[shade][color];
