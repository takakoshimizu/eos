import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components';
import { I18n } from '@lingui/react';
import { Trans, t } from '@lingui/macro';

import { Button } from './button';
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

	background-color: ${color('card')};
	border-top: 4px solid ${color('accent')};

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
};

export const Block: FunctionComponent<Props> = ({ block }) => {
	const [isOpen, setOpen] = useState(false);
	const actions = block.transactions.reduce((actions, tx) => {
		if (typeof tx.trx === 'string') return actions;
		return actions + tx.trx.transaction.actions.length;
	}, 0);

	return (
		<$Block>
			<I18n>
				{({ i18n }) => (
					<>
						<KvPair keyName={i18n._(t`ID`)}>{block.id}</KvPair>
						<KvPair keyName={i18n._(t`Timestamp`)}>{block.timestamp}</KvPair>
						<KvPair keyName={i18n._(t`Actions`)}>{actions.toString()}</KvPair>
					</>
				)}
			</I18n>

			<Button onClick={() => setOpen(!isOpen)}>
				<Trans>{'Toggle details'}</Trans>
			</Button>

			{isOpen && <$Raw>{JSON.stringify(block, null, 2)}</$Raw>}
		</$Block>
	);
};
