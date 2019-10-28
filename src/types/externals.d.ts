declare module 'redux-actions-namespace' {
	type ActionCreators = {
		createAction(name: string, payloadFn?: Function, metaFn?: Function): ReduxActions.ActionFunctionAny<ReduxActions.Action<any>>;
	}
	export function createNamespace(namespace: string): ActionCreators;
}

declare module 'redux-devtools-extension';
declare module 'redux-promise';
declare module 'shader';
