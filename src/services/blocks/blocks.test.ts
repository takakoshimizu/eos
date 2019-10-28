import * as Actions from './actions';
import reducer from './reducer';

describe('Services/Blocks', () => {
	describe('Reducer', () => {
		it('should replace the blocks store with the payload', () => {
			const payload: any[] = [{ id: '', previous: '' }];
			const startingState: any[] = [];
			const result = reducer(startingState, { type: Actions.get.toString(), payload });
			expect(result).toEqual(payload);
		});

		it('should take no action with an error payload', () => {
			const payload = { type: Actions.get.toString(), error: true, payload: [] };
			const startingState: any[] = [];
			const result = reducer(startingState, payload);
			expect(result).toEqual(startingState);
		});
	})
});
