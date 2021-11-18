import {NextFunction, Request, Response} from 'express';
import { BlockChainInfoApi} from '../resources/blockChainInfo';
export class commonController {
    static getHelloWorld(req:Request,res:Response,next:NextFunction) {
        res.send({message : "Welcome to Reno Backend Api"});
    }
  
    static async getBlocksList(req:Request,res:Response,next:NextFunction) {
        const infoList = await BlockChainInfoApi.getBlocksList();  
        if(infoList !== -1) {
            res.send(infoList);
        } else {
            res.send('Error Occured');
        }
    }
    static async getBlockInfo(req:Request,res:Response,next:NextFunction) {
        const { hash } = req.query
        const blockInfo = await BlockChainInfoApi.getBlockInfo(hash);  
        if(blockInfo !== -1) {
            res.send(blockInfo);
        } else {
            res.send('Error Occured');
        }
    }

    static async getBlockChainInfoList(req:Request,res:Response,next:NextFunction) {
        const blockInfo = await BlockChainInfoApi.getBlockChainInfoList();  
        if(blockInfo !== -1) {
            res.send(blockInfo);
        } else {
            res.send('Error Occured');
        }
    }

    
}


