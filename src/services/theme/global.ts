import { createGlobalStyle } from 'styled-components';
import { color } from '.';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: ${p => p.theme.font.primary};
		padding: 1rem 2rem;

		background-color: ${color('light', 'neutral')};
		color: ${color('light', 'text')};

		@media (prefers-color-scheme: dark) {
			background-color: ${color('dark', 'neutral')};
			color: ${color('dark', 'text')};
		}
	}
`;
