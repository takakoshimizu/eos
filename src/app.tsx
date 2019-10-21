import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './services/theme';

import { GlobalStyle } from './services/theme/global';
import { store } from './store';

export const App: FunctionComponent = () => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				<h1>{'EOSIO Blockchain Viewer'}</h1>
			</>
		</ThemeProvider>
	</Provider>
);
