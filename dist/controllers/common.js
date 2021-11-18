"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonController = void 0;
const blockChainInfo_1 = require("../resources/blockChainInfo");
class commonController {
    static getHelloWorld(req, res, next) {
        res.send({ message: "Welcome to Reno Backend Api" });
    }
    static getBlocksList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const infoList = yield blockChainInfo_1.BlockChainInfoApi.getBlocksList();
            if (infoList !== -1) {
                res.send(infoList);
            }
            else {
                res.send('Error Occured');
            }
        });
    }
    static getBlockInfo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = req.query;
            const blockInfo = yield blockChainInfo_1.BlockChainInfoApi.getBlockInfo(hash);
            if (blockInfo !== -1) {
                res.send(blockInfo);
            }
            else {
                res.send('Error Occured');
            }
        });
    }
    static getBlockChainInfoList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const blockInfo = yield blockChainInfo_1.BlockChainInfoApi.getBlockChainInfoList();
            if (blockInfo !== -1) {
                res.send(blockInfo);
            }
            else {
                res.send('Error Occured');
            }
        });
    }
}
exports.commonController = commonController;
//# sourceMappingURL=common.js.map