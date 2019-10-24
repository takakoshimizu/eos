type Transaction = {
	status: string;
	cpu_usage_us: number;
	net_usage_words: number;
	trx: string;
}
type Block = import('eosjs/dist/eosjs-rpc-interfaces').GetBlockResult & { transactions: Transaction[] };
type BlockStore = Block[];

type Store = {
	blocks: BlockStore;
};
