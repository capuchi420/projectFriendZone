import express from 'express';
import { register, login, update } from '../controllers/userController.js';

export const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.patch('/update/:_id', update);

