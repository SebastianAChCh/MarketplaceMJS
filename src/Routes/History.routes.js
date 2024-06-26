import { Router } from 'express';
import {
  addPurchase,
  deletePurchase,
  getHistories,
  getHistory,
} from '../Controllers/History.controller';

const router = Router();

router.get('/getHistories', getHistories);

router.get('/getHistory', getHistory);

router.post('/addPurchase', addPurchase);

router.delete('/deletePurchase', deletePurchase);

export default router;
