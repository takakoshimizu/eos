import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { I18nProvider } from '@lingui/react';
import { Trans } from '@lingui/macro';

import { theme } from './services/theme';
import en from './lang/en/messages';

import { GlobalStyle } from './services/theme/global';
import { store } from './store';

import { BlockList } from './scenes/block-list';

const App: FunctionComponent = () => (
	<Provider store={store}>
		<I18nProvider catalogs={{ en }} language="en">
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyle />
					<h1>
						<Trans>{'EOSIO Blockchain Viewer'}</Trans>
					</h1>
					<BlockList />
				</>
			</ThemeProvider>
		</I18nProvider>
	</Provider>
);

export default hot(module)(App);
