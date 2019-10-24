import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';

import blocks from './services/blocks/reducer';
import fetchStatus from './services/fetch-status/reducer';

const reducers = combineReducers({
	blocks,
	fetchStatus
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(promiseMiddleware)));
