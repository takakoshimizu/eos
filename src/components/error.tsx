import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { color, shadow } from '../services/theme';

const $Error = styled.div`
	margin: 1rem 0;
	padding: 1rem;
	text-align: center;
	font-size: 1.2em;

	border-radius: 6px;
	background-color: ${color('card')};
	box-shadow: ${shadow('z1')};
	color: ${color('error')};
`;

type Props = {
	isVisible: boolean;
	message: string;
};

export const Error: FunctionComponent<Props> = ({ isVisible, message }) => {
	if (!isVisible) return null;

	return (
		<$Error>
			{message}
		</$Error>
	);
};
