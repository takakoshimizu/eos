import { createNamespace } from 'redux-actions-namespace';
import { getBlocks, getHeadBlock } from './api';
const { createAction } = createNamespace('EOSIO:BLOCK:');

export const details = createAction('DETAILS');
export const get = createAction('GET', async (payload: number = 5) => {
	const blockId = await getHeadBlock();
	return getBlocks(blockId, payload);
});
