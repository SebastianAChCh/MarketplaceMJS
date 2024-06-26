import { Router } from 'express';
import {
  addPurchase,
  deleteHistory,
  getHistories,
  getHistory,
} from '../Controllers/History.controller';

const router = Router();

router.get('/getHistories', getHistories);

router.get('/getHistory/:email', getHistory);

router.post('/addPurchase', addPurchase);

router.delete('/deleteHistory', deleteHistory);

export default router;
