type Block = import('eosjs/dist/eosjs-rpc-interfaces').GetBlockResult;
type BlockStore = Block[];

type Store = {
	blocks: BlockStore;
};
