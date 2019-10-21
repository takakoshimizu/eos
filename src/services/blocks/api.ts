import { JsonRpc } from 'eosjs';
import { GetBlockResult } from "eosjs/dist/eosjs-rpc-interfaces";

const rpc = new JsonRpc("https://api.eosnewyork.io");

export function getBlocks(
	id: string,
	count: number,
	blocks: GetBlockResult[] = []
): Promise<GetBlockResult[]> | GetBlockResult[] {
	if (count < 1) return blocks;
	return rpc
		.get_block(id)
		.then(block => getBlocks(block.previous, count - 1, blocks.concat(block)));
}

export async function getLastIrreversableBlockId(): Promise<string> {
	const info = await rpc.get_info();
	return info.last_irreversible_block_id;
}
