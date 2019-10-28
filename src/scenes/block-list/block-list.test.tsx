import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { I18nProvider } from '@lingui/react';

import { createStore } from 'redux';
import { reducers } from '../../store';
import { lightTheme } from '../../services/theme';
import en from '../../lang/en/messages';

import { BlockList } from '.';
import { List } from './list';
import { Loader } from '../../components/loader';
import { Error } from '../../components/error';
import { ThemeProvider } from 'styled-components';

const wrap = (initialState: any, story: any) => {
	const store = createStore(reducers, {
		blocks: [],
		fetchStatus: 'idle'
	});

	return (
		<Provider store={store}>
			<I18nProvider catalogs={{ en }} language="en">
				<ThemeProvider theme={lightTheme}>
					{story}
				</ThemeProvider>
			</I18nProvider>
		</Provider>
	)
};

describe('Block list', () => {
	it('should render', () => {
		const result = mount(
			wrap({ blocks: [], fetchStatus: 'idle' }, <BlockList />)
		);

		expect(result).toMatchSnapshot();
	});

	it('should render the loader when fetching', () => {
		const wrapper = mount(
			wrap({ blocks: [], fetchStatus: 'fetching' }, <BlockList />)
		);

		const result = wrapper.find(Loader);
		expect(result).toHaveLength(1);
	});

	it('should render the error message upon error', () => {
		const wrapper = mount(
			wrap({ blocks: [], fetchStatus: 'error' }, <BlockList />)
		);

		const result = wrapper.find(Error);
		expect(result).toHaveLength(1);
	});

	it('should render the list at all times', () => {
		const wrapper = mount(
			wrap({ blocks: [], fetchStatus: 'idle' }, <BlockList />)
		);

		const result = wrapper.find(List);
		expect(result).toHaveLength(1);
	});
});
