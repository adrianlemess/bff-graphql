import * as express from 'express';
import UserController from '../../controllers/users';

const router = express.Router();
const userController = new UserController();

router.get('/', (req, res) => userController.getUsersWithCompleteName(req, res));

export default router;