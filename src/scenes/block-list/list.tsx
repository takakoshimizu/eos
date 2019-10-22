import React from 'react';
import { useSelector } from 'react-redux';

import { getBlocks } from '../../services/blocks/selectors';

export const List = () => {
	const blocks = useSelector(getBlocks);

	return (
		<div>
			{blocks.map(b => <pre key={b.id}>{JSON.stringify(b)}</pre>)}
		</div>
	);
};
