import styled from 'styled-components';
import { color, shadow } from '../services/theme';
import shader from 'shader';

export const Button = styled.button`
	padding: .5em 1em;
	border-radius: 6px;
	border: 0;

	box-shadow: ${shadow('z1')};

	background-color: ${color('accent')};
	color: ${color('buttonText')};

	transition: 
		background-color .3s ease-in-out,
		box-shadow .3s ease-in-out,
		transform .2s linear;

	&:hover {
		box-shadow: ${shadow('z2')};
		background-color: ${p => shader(color('accent')(p), 0.2)};
		transform: translateY(-2px);
	}
`;
