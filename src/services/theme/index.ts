const themeBase: Theme = {
	colors: {},
	font: {
		primary: 'Helvetica, sans-serif'
	},
	shadows: {
		z1: '0px 1px 3px 0px rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2)',
		z2: '0 3px 6px 0 rgba(0,0,0,0.23), 0 3px 6px 0 rgba(0,0,0,0.16)'
	}
}

export const lightTheme: Theme = {
	...themeBase,
	colors: {
		...themeBase.colors,
		neutral: '#ffffff',
		card: '#f2f2f2',
		text: '#1a242d',
		accent: '#3277a8',
		buttonText: '#ffffff',
		error: '#a32121'
	}
};

export const darkTheme: Theme = {
	...themeBase,
	colors: {
		...themeBase.colors,
		neutral: '#595f64',
		card: '#1a242d',
		text: '#fafafa',
		accent: '#205478',
		buttonText: '#fafafa',
		error: '#ba1111'
	}
};

type ZIndex = 'z1' | 'z2';
export type Theme = { [key: string]: Record<string, string> } 
type PropsWithTheme = { theme: Theme };

export const color = (color: string) => (props: PropsWithTheme): string => props.theme.colors[color];
export const shadow = (zIndex: ZIndex) => (props: PropsWithTheme): string => props.theme.shadows[zIndex];
