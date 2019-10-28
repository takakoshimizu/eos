import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { color } from '../services/theme';

/* Thanks, https://loading.io/css/ as always */
const anim = keyframes`
	0% {
			top: 28px;
			left: 28px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: -1px;
			left: -1px;
			width: 58px;
			height: 58px;
			opacity: 0;
		}
`;

const $Loader = styled.div`
	display: inline-block;
	position: relative;
	width: 64px;
	height: 64px;

	div {
		position: absolute;
		border: 4px solid ${color('text')};
		opacity: 1;
		border-radius: 50%;
		animation: ${anim} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}

	div:nth-child(2) {
		animation-delay: -0.5s;
	}
`;

const $LoaderHolder = styled.div`
	padding: 2rem;
	width: 64px;

	margin-left: auto;
	margin-right: auto;
`;

type Props = {
	isVisible: boolean;
};

export const Loader: FunctionComponent<Props> = ({ isVisible }) => {
	if (!isVisible) return null;

	return (
		<$LoaderHolder>
			<$Loader>
				<div />
				<div />
			</$Loader>
		</$LoaderHolder>
	);
};
