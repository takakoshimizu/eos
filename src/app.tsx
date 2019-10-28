import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { I18nProvider } from '@lingui/react';

import { ColorThemeProvider } from './services/theme/provider';
// @ts-ignore not a TS-able module
import en from './lang/en/messages';

import { GlobalStyle } from './services/theme/global';
import { store } from './store';

import { BlockList } from './scenes/block-list';

const App: FunctionComponent = () => (
	<Provider store={store}>
		<I18nProvider catalogs={{ en }} language="en">
			<ColorThemeProvider>
				<>
					<GlobalStyle />
					<BlockList />
				</>
			</ColorThemeProvider>
		</I18nProvider>
	</Provider>
);

export default hot(module)(App);
