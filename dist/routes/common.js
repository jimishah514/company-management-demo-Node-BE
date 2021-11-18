"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const common_1 = require("../controllers/common");
const auth_1 = require("../middlewares/auth");
exports.router = (0, express_1.Router)();
exports.router.get("/", (0, auth_1.requireAuthUser)(), common_1.commonController.getHelloWorld);
exports.router.get("/blocks", (0, auth_1.requireAuthUser)(), common_1.commonController.getBlocksList);
exports.router.get("/blockInfo", (0, auth_1.requireAuthUser)(), common_1.commonController.getBlockInfo);
exports.router.get("/blocksInfoList", (0, auth_1.requireAuthUser)(), common_1.commonController.getBlockChainInfoList);
//# sourceMappingURL=common.js.map