import { Router } from 'express';
import { commonController } from '../controllers/common';
import { requireAuthUser } from '../middlewares/auth';

export const router = Router();

router.get("/",
   requireAuthUser(),
   commonController.getHelloWorld);

router.get("/blocks",
   requireAuthUser(),
   commonController.getBlocksList);

router.get("/blockInfo",
   requireAuthUser(),
   commonController.getBlockInfo);

router.get("/blocksInfoList",
   requireAuthUser(),
   commonController.getBlockChainInfoList);
