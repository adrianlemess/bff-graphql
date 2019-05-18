import * as express from 'express';
import userRouter from './users';

const router = express.Router();

router.use('/users-modified', userRouter);

export default router;