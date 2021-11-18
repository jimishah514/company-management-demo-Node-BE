"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.helper = void 0;
const axios = __importStar(require("axios"));
class helper {
    static getTime() {
        return __awaiter(this, void 0, void 0, function* () {
            var dt = new Date().getTime();
            return dt;
        });
    }
    static getBlocksList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const time = yield helper.getTime();
                const infoList = yield axios.default.get(`https://blockchain.info/blocks/${time}?format=json`);
                return infoList.data;
            }
            catch (e) {
                console.log("Error Occured While retriving data from blockchain.info: ", e);
            }
        });
    }
    static getBlockInfo(hash) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blockInfo = yield axios.default.get(`https://blockchain.info/rawblock/${hash}`);
                const currentTime = new Date().getTime();
                const age = currentTime - parseInt((_a = blockInfo.data) === null || _a === void 0 ? void 0 : _a.time);
                const ageInMinutes = Math.floor(age / 60000);
                const blockInfoObj = {
                    hash: hash,
                    height: (_b = blockInfo.data) === null || _b === void 0 ? void 0 : _b.height,
                    weight: (_c = blockInfo.data) === null || _c === void 0 ? void 0 : _c.weight,
                    size: (_d = blockInfo.data) === null || _d === void 0 ? void 0 : _d.size,
                    age: ageInMinutes,
                    transactions: (_f = (_e = blockInfo.data) === null || _e === void 0 ? void 0 : _e.tx) === null || _f === void 0 ? void 0 : _f.length,
                    prev_block: (_g = blockInfo.data) === null || _g === void 0 ? void 0 : _g.prev_block,
                    block_index: (_h = blockInfo.data) === null || _h === void 0 ? void 0 : _h.block_index
                };
                console.log("blockInfoObj : ", blockInfoObj);
                return blockInfoObj;
            }
            catch (e) {
                console.log("Error Occured While retriving data from blockchain.info: ", e);
            }
        });
    }
}
exports.helper = helper;
//# sourceMappingURL=helperFunctions.js.map