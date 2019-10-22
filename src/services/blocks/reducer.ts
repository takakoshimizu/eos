import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const INITIAL_STATE: BlockStore = [];

export default handleActions({
	[Actions.get.toString()]: (
		_,
		{ payload }: ReduxActions.Action<BlockStore>
	): BlockStore => payload
}, INITIAL_STATE);
