import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userRouter } from './routes/userRoutes.js';
import { msgRouter } from './routes/msgRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Mnogo sam najaci');
});

app.use('/users', userRouter);
app.use('/msgs', msgRouter);

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB CONNECTED"));
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})