import { Router } from 'express';
import {
  getUsers,
  createUser,
  deleteUser,
  editUser,
  getUser,
} from '../Controllers/Users.controller.js';

const router = Router();

router.get('/getUsers', getUsers);

router.post('/createUser', createUser);

router.get('/getUser/:email', getUser);

router.patch('/editUser', editUser);

router.delete('/deleteUser/:email', deleteUser);

export default router;
