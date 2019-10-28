import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trans, t } from '@lingui/macro';

import { Button } from '../../components/button';
import { get } from '../../services/blocks/actions';
import { begin } from '../../services/fetch-status/actions';
import { getFetchStatus } from '../../services/fetch-status/selectors';

import { Loader } from '../../components/loader';
import { Error } from '../../components/error';

import { List } from './list';
import { I18n } from '@lingui/react';

export const BlockList = () => {
	const dispatch = useDispatch();
	const fetchStatus = useSelector(getFetchStatus);

	return (
		<main>
			<h1>
				<Trans>{'EOSIO Blockchain Viewer'}</Trans>
			</h1>

			<Button
				onClick={() => {
					dispatch(begin());
					dispatch(get(10));
				}}>
				<Trans>{'Get 10 most recent blocks'}</Trans>
			</Button>

			<Loader isVisible={fetchStatus === 'fetching'} />
			<I18n>
				{({ i18n }) => (
					<Error
						isVisible={fetchStatus === 'error'}
						message={i18n._(t`There was an error retrieving new blocks to display.`)}
					/>
				)}
			</I18n>
			<List />
		</main>
	);
};
