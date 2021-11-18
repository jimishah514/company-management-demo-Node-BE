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
exports.BlockChainInfoApi = void 0;
const helperFunctions_1 = require("./helperFunctions");
class BlockChainInfoApi {
    static getBlocksList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield helperFunctions_1.helper.getBlocksList();
            }
            catch (_a) {
                throw Error("Error Occured while getting questions list");
                return -1;
            }
        });
    }
    static getBlockInfo(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield helperFunctions_1.helper.getBlockInfo(hash);
            }
            catch (_a) {
                throw Error("Error Occured while getting questions list");
                return -1;
            }
        });
    }
    static getBlockChainInfoList() {
        return __awaiter(this, void 0, void 0, function* () {
            let blockChainInfoList = [];
            try {
                const blockList = yield helperFunctions_1.helper.getBlocksList();
                // for(let i =0;i< blockList.length;i++) {
                for (let i = 0; i < 5; i++) {
                    const blockInfo = yield helperFunctions_1.helper.getBlockInfo(blockList[i].hash);
                    blockChainInfoList.push(blockInfo);
                }
                return blockChainInfoList;
            }
            catch (_a) {
                throw Error("Error Occured while getting questions list");
                return -1;
            }
        });
    }
}
exports.BlockChainInfoApi = BlockChainInfoApi;
//# sourceMappingURL=blockChainInfo.js.map