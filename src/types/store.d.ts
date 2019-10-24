// Some types are vastly simplified as more detail is unneeded.

type Action = {
	account: string;
	name: string;
};

type TransactionDetails = {
	actions: Action[];
};

type TransactionInfo = {
	transaction: TransactionDetails;
};

type Transaction = {
	status: string;
	cpu_usage_us: number;
	net_usage_words: number;
	trx: string | TransactionInfo;
};

type Block = import('eosjs/dist/eosjs-rpc-interfaces').GetBlockResult & { transactions: Transaction[] };
type BlockStore = Block[];

type FetchStatus = 'idle' | 'fetching' | 'error';

type Store = {
	blocks: BlockStore;
	fetchStatus: FetchStatus;
};
