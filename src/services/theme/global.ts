import { createGlobalStyle } from 'styled-components';
import { color } from '.';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: ${p => p.theme.font.primary};
		padding: 1rem 2rem;

		background-color: ${color('neutral')};
		color: ${color('text')};
	}

	main {
		max-width: 1180px;
		margin-left: auto;
		margin-right: auto;
	}
`;
