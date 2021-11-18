import { helper } from './helperFunctions';

export class BlockChainInfoApi {
    static async getBlocksList() {
        try {
            return  await helper.getBlocksList()
        } catch {
            throw Error("Error Occured while getting questions list");
            return -1;
        }
    }

    static async getBlockInfo(hash: any) {
        try {
            return  await helper.getBlockInfo(hash)
        } catch {
            throw Error("Error Occured while getting questions list");
            return -1;
        }
    }

    static async getBlockChainInfoList() {
        let blockChainInfoList : any = []
        try {
            const blockList = await helper.getBlocksList()
            // for(let i =0;i< blockList.length;i++) {
            for(let i =0;i< 5;i++) {
                const blockInfo = await helper.getBlockInfo(blockList[i].hash)
                blockChainInfoList.push(blockInfo)
            }
            return blockChainInfoList
        } catch {
            throw Error("Error Occured while getting questions list");
            return -1;
        }
    }
    
}




