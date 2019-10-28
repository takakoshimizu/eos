import * as Actions from './actions';
import * as BlockActions from '../blocks/actions';
import reducer from './reducer';

describe('Services/Fetch Status', () => {
	describe('It should set as fetching upon begin', () => {
		const result = reducer('idle', Actions.begin());
		expect(result).toEqual('fetching');
	});

	it('should set as idle again upon completion of block fetching', () => {
		const result = reducer('fetching', { type: BlockActions.get.toString(), payload: '' });
		expect(result).toEqual('idle');
	});

	it('should set as error if block fetch payload is an error', () => {
		const result = reducer('fetching', { type: BlockActions.get.toString(), error: true, payload: '' });
		expect(result).toEqual('error');
	});
});
