import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';

import blocks from './services/blocks/reducer';

const reducers = combineReducers({
	blocks
});

const composeEnhancers = composeWithDevTools;
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(promiseMiddleware)));
