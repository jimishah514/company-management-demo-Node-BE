import * as axios from 'axios';
import { Block } from '../interfaces/block';

export class helper {
    
    static async getTime() {
        var dt = new Date().getTime();
        return dt;
    }

    static async getBlocksList() {
        try {
            const time = await helper.getTime()
            const infoList  = await axios.default.get(`https://blockchain.info/blocks/${time}?format=json`)
            return infoList.data
        }
        catch (e) {
            console.log("Error Occured While retriving data from blockchain.info: ", e);
        }
    }

    static async getBlockInfo(hash: any) {
        
        try {
            const blockInfo  = await axios.default.get(`https://blockchain.info/rawblock/${hash}`)
            const currentTime = new Date().getTime();
            const age = currentTime - parseInt(blockInfo.data?.time)
            const ageInMinutes =  Math.floor(age / 60000);

            const blockInfoObj : Block = {
                hash: hash,
                height : blockInfo.data?.height,
                weight : blockInfo.data?.weight,
                size : blockInfo.data?.size,
                age : ageInMinutes,
                transactions: blockInfo.data?.tx?.length,
                prev_block : blockInfo.data?.prev_block,
                block_index : blockInfo.data?.block_index
            }
            console.log("blockInfoObj : ",blockInfoObj)
            return blockInfoObj
        }
        catch (e) {
            console.log("Error Occured While retriving data from blockchain.info: ", e);
        }
    }
    
}