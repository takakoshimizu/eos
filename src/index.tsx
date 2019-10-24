import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const container = document.getElementById('react-root');
if (container) {
	ReactDOM.render(<App />, container);
}
