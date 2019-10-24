import { handleActions } from "redux-actions";
import * as Actions from "./actions";

const INITIAL_STATE: BlockStore = [];

export default handleActions(
	{
		[Actions.get.toString()]: {
			next(_, { payload }: ReduxActions.Action<BlockStore>): BlockStore {
				return payload;
			}
		}
	},
	INITIAL_STATE
);
