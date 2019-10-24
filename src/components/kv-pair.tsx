import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const $KvPair = styled.div.attrs({
	tabIndex: 0
})`
	display: flex;
	font-size: 1.2rem;
`;

const $Key = styled.div`
	font-weight: 600;
	margin-right: 1rem;
	flex: 0 0 7em;
`;

const $Value = styled.div`
	flex: 1;
`;

type Props = {
	keyName: string;
	children: string;
}

export const KvPair: FunctionComponent<Props> = ({ keyName, children }) => (
	<$KvPair>
		<$Key>{keyName}</$Key>
		<$Value>{children}</$Value>
	</$KvPair>
)
