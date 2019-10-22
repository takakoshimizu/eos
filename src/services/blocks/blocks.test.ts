import * as Actions from './actions';
import reducer from './reducer';

describe('Services/Blocks', () => {
	describe('Reducer', () => {
		it('should replace the blocks store with the payload', () => {
			const payload: Block[] = [{ id: '', previous: '' }];
			const startingState: Block[] = [];
			const result = reducer(startingState, { type: Actions.get.toString(), payload });
			expect(result).toEqual(payload);
		});
	})
});
