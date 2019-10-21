import { createNamespace } from 'redux-actions-namespace';
import { getBlocks, getLastIrreversableBlockId } from './api';
const { createAction } = createNamespace('EOSIO:BLOCK');

export const details = createAction('DETAILS');
export const get = createAction('GET', async (payload: number) => {
	const blockId = await getLastIrreversableBlockId();
	return getBlocks(blockId, payload);
});
