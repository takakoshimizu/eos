import { handleActions } from 'redux-actions';
import * as Fetch from './actions';
import * as Blocks from '../blocks/actions';

const INITIAL_STATE: FetchStatus = 'idle';

export default handleActions({
	[Fetch.begin.toString()]: () => 'fetching',
	[Blocks.get.toString()]: {
		next() {
			return 'idle';
		},
		throw() {
			return 'error';
		}
	}
}, INITIAL_STATE);
