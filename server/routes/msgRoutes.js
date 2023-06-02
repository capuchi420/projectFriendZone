import express from 'express';
import { postMsg, getAllMsgs } from '../controllers/msgController.js';

export const msgRouter = express.Router();

msgRouter.get('/', getAllMsgs);
msgRouter.post('/postmsg', postMsg);

