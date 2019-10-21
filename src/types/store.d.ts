type Store = {
	blocks: BlockStore;
};

type BlockStore = Block[];

type Block = {
	id: string;
	previous: string;
	// more to come
};
