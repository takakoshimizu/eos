import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components';

import { KvPair } from './kv-pair';

import { color, shadow } from '../services/theme';

const $Block = styled.li`
	padding: 1rem;
	margin: 1rem 0;
	border-radius: 6px;
	list-style: none;
	cursor: default;

	box-shadow: ${shadow('z1')};
	transition: box-shadow 0.3s ease-in-out;

	background-color: ${color('light', 'card')};
	border-top: 4px solid ${color('light', 'accent')};
	@media (prefers-color-scheme: dark) {
		background-color: ${color('dark', 'card')};
		border-top-color: ${color('dark', 'accent')};
	}

	&:hover {
		box-shadow: ${shadow('z2')};
	}

	button {
		margin-top: 1em;
	}
`;

const $Raw = styled.pre`
	max-width: 100%;
	max-height: 50vh;
	overflow: auto;
`;

type Props = {
	block: Block;
}

export const Block: FunctionComponent<Props> = ({ block }) => {
	const [isOpen, setOpen] = useState(false);
	
	return (
		<$Block>
			<KvPair keyName="ID">{block.id}</KvPair>
			<KvPair keyName="Timestamp">{block.timestamp}</KvPair>
			<KvPair keyName="Actions">{block.transactions.length.toString()}</KvPair>

			<button onClick={() => setOpen(!isOpen)}>{'Toggle details'}</button>

			{isOpen && (
				<$Raw>{JSON.stringify(block, null, 2)}</$Raw>
			)}
		</$Block>
	);
};
