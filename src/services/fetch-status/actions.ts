import { createNamespace } from 'redux-actions-namespace';
const { createAction } = createNamespace('EOSIO:FETCH:');

export const begin = createAction('BEGIN');
