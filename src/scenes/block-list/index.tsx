import React from 'react';
import { useDispatch } from 'react-redux';

import { get } from '../../services/blocks/actions';
import { List } from './list';

export const BlockList = () => {
	const dispatch = useDispatch();

	return (
		<main>
			<button onClick={() => dispatch(get(10))}>{'Get 10 most recent blocks'}</button>
			<List />
		</main>
	);
};
