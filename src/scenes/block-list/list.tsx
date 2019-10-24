import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getBlocks } from '../../services/blocks/selectors';
import { Block } from '../../components/block';

const $List = styled.ul`
	list-style: none;
	padding: 0;
`;

export const List = () => {
	const blocks = useSelector(getBlocks);

	return (
		<$List>
			{blocks.map(b => <Block key={b.id} block={b} />)}
		</$List>
	);
};
